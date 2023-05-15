import tw from "twin.macro";

import ContentContainer from "./ContentContainer"
import Section from "./Section"
import Subtitle from "./Subtitle";
import Spoon from "./Spoon";
import Title from "./Title";
import MainButton from "./MainButton";

const Layer = tw.div`
  absolute
  inset-0
  w-full h-1/2
  bg-black-100
`;
const Content = tw.div`
  py-16
  text-center
  bg-black-100
  border border-golden-100
`;
const P = tw.p`
  font-opensans
  text-base leading-[1.75]
  tracking-[0.04em]
  text-white
  mb-16
`;
const Form = tw.form`
  flex items-center
  flex-col sm:flex-row
  gap-4 sm:gap-8
  max-w-[75%] mx-auto
`;
const Input = tw.input`
  grow
  w-full
  px-[1.125rem] py-4
  font-fancy font-semibold
  text-base leading-[1.75] tracking-[0.04em]
  text-[#aaa]
  bg-inherit
  border border-[#F5EFDB]
`;

const NewSletter = () => {
  return (
    <Section>
      <Layer></Layer>
      <ContentContainer>
        <Content>
          <Subtitle text='Newsletter' />
          <Spoon centerAligned />
          <Title text='Subscribe to Our new Newsletter' mT='0.5rem' mb='1.5rem' />
          <P>And never miss latest Updates</P>
          <Form action="#">
            <Input placeholder='Email Adress' />
            <MainButton title='Subscribe' />
          </Form>
        </Content>
      </ContentContainer>
    </Section>
  )
}

export default NewSletter;