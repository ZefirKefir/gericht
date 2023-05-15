import tw from 'twin.macro';

import images from '../constants/images';

import Section from './Section';
import ContentContainer from './ContentContainer';
import Title from './Title';
import Spoon from './Spoon';
import Descr from './Descr';
import MainButton from './MainButton';

const Content = tw.div`
  flex
  flex-col lg:flex-row
  items-center
  justify-between
  gap-12 lg:gap-[6.5%]
`;
const G = tw.img`
  max-w-[80%]
  lg:max-w-[35%]
  absolute
  z-[-10]
  top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2
`;
const About = tw.div`
  text-center lg:text-right
`;
const Knife = tw.img`
  max-w-[15%] lg:max-w-[6.5%]
`;
const History = tw.div`text-center lg:text-left`;

const AboutUs = ({ hasBg }) => {
  return (
    <Section hasBg={hasBg} pT='8em' pB='8em'>
      <ContentContainer>
        <Content>
          <G src={images.G} alt='G' />
          <About>
            <Title text='About Us' />
            <Spoon rotated rightAligned centerAligned />
            <Descr
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.'
              mT='2rem' mB='2rem'
            />
            <MainButton title='Know More' />
          </About>
          <Knife src={images.knife} alt='knife' />
          <History>
            <Title text='Our&nbsp;History' />
            <Spoon leftAligned centerAligned />
            <Descr
              text='Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.'
              mT='2rem' mB='2rem'
            />
            <MainButton title='Know More' />
          </History>
        </Content>
      </ContentContainer>
    </Section>
  )
}

export default AboutUs;