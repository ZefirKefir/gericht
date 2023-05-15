import tw from "twin.macro";

import Section from "./Section"
import ContentContainer from "./ContentContainer";
import Subtitle from "./Subtitle";
import Title from "./Title";
import Spoon from "./Spoon";

import { images } from "../constants";
import awards from "../constants/data";

const AwardImg = tw.img`
  block
  absolute inset-10
  w-[120px] 2xl:w-[150px]
  hover:rotate-180
`;
const Content = tw.div`
  flex
  justify-between
  flex-col lg:flex-row
  items-start lg:items-center
  gap-12 xl:gap-8 2xl:gap-28
`;
const Text = tw.div``;
const AwardsList = tw.div`
  grid
  grid-rows-4 md:grid-rows-2 lg:grid-rows-4 xl:grid-rows-2
  grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2
  gap-x-8 gap-y-8 xl:gap-y-16
`;
const Award = tw.div`
  flex items-center
  gap-4 lg:gap-8
`;
const AwardIcon = tw.img`
  w-[80px]
`;
const AwardTitle = tw.h6`
  font-fancy font-bold
  text-2xl leading-[1.3] tracking-[0.04em]
  text-golden-100
  mb-2
`;
const AwardSub = tw.p`
  font-opensans
  text-base leading-[1.75] tracking-[0.04em]
  text-[#aaa]
`;
const LaurelsImg = tw.img`
  max-w-[75%]
  self-center
  -translate-x-4 lg:translate-x-0
  lg:max-w-[50%]
  xl:max-w-[38.5%]
`;

const Laurels = () => {
  return (
    <div style={{ position: 'relative' }}>
      <AwardImg src={images.logo} />
      <Section pT='12em' pB='8em' >
        <ContentContainer>
          <Content>
            <Text>
              <Subtitle text='Awards & Recognition' mB='0.5rem' />
              <Spoon />
              <Title text='Our Laurels' mT='0.5rem' mB='4rem' />
              <AwardsList>
                {awards.awards.map(item => (
                  <Award>
                    <AwardIcon src={item.imgUrl} />
                    <div>
                      <AwardTitle>{item.title}</AwardTitle>
                      <AwardSub>{item.subtitle}</AwardSub>
                    </div>
                  </Award>
                ))}
                {/* <Award>
                  <AwardIcon src={images.award01} />
                  <div>
                    <AwardTitle>Bob Gourmond</AwardTitle>
                    <AwardSub>Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.</AwardSub>
                  </div>
                </Award> */}
              </AwardsList>
            </Text>
            <LaurelsImg src={images.laurels} alt='laurels' />
          </Content>
        </ContentContainer>
      </Section>
    </div>
  )
}

export default Laurels;