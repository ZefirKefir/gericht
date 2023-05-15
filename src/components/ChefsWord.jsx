import tw, { styled } from 'twin.macro';

import Section from './Section';
import ContentContainer from './ContentContainer';
import Subtitle from './Subtitle';
import Spoon from './Spoon';
import Title from './Title';

import images from '../constants/images';
import Descr from './Descr';


const Content = tw.div`
  flex
  flex-col lg:flex-row
  items-center
  justify-between
  gap-24
`;
const SmilingChef = tw.img`
  max-w-[95%] lg:max-w-[48.5%]
`;
const Text = tw.div``;
const Quote = tw.div`
  italic font-opensans
  text-base leading-[1.3] tracking-[0.04em]
  text-[#aaa]
  mb-16
`;
const QuoteIcon = tw.img`
  w-[47px]
  inline
  -mt-6 mr-[.625rem]
`;
const ChefsName = tw.p`
  font-fancy
  text-3xl leading-[1.3] tracking-[0.04em]
  text-golden-100
  mb-2
`;
const Sign = tw.img`
  mt-16
  w-[235px]
`;


const ChefsWord = () => {
  return (
    <Section pT='8em' pB='8em' >
      <ContentContainer>
        <Content>
          <SmilingChef src={images.chef} alt='smiling chef' />
          <Text>
            <Subtitle text="Chef's Word" mB='0.5rem' />
            <Spoon />
            <Title text='What We Believe in' mT='0.5rem' mB='4rem' />
            <Quote>
              <QuoteIcon src={images.quote} alt='quote' />
              <span>
                I believe that my restaurant is the best and any other one is lack of taste in our days.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </span>
            </Quote>
            <ChefsName>Kevin Luo</ChefsName>
            <Descr text='Chef & Founder' />
            <Sign src={images.sign} alt='sign' />
          </Text>
        </Content>
      </ContentContainer>
    </Section>
  )
}

export default ChefsWord;
