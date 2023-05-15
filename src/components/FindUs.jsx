import tw from 'twin.macro';

import Section from './Section';
import ContentContainer from './ContentContainer';

import { images } from '../constants';
import Subtitle from './Subtitle';
import Spoon from './Spoon';
import Descr from './Descr';
import Title from './Title';
import MainButton from './MainButton';


const Content = tw.div`
  flex
  justify-between
  items-start lg:items-center
  flex-col lg:flex-row
  gap-12 lg:gap-28
`;
const Text = tw.div``;
const Image = tw.img`
  max-w-[95%]
  lg:max-w-[50%]
`;
const HoursH5 = tw.h5`
  font-fancy font-bold
  text-2xl leading-[1.3] tracking-[0.04em]
  text-golden-100
  mb-4
`;
const HoursP = tw.p`
  font-opensans
  text-base leading-[1.75] tracking-[0.04em]
  text-white
`;
const HoursPSec = tw(HoursP)`mb-16 mt-4`;

const FindUs = () => {
  return (
    <Section pT='8em' pB='8em'>
      <ContentContainer>
        <Content>
          <Text>
            <Subtitle text='Contact' />
            <Spoon />
            <Title text='Find us' mT='0.5rem' mB='4rem' />
            <Descr text='Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG' mB='2rem' />
            <HoursH5>Opening Hours</HoursH5>
            <HoursP>Mon - Fri: 10:00 am - 02:00 am</HoursP>
            <HoursPSec>Sat - Sun: 10:00 am - 03:00 am</HoursPSec>
            <MainButton title='Visit Us' />
          </Text>
          <Image src={images.findus} />
        </Content>
      </ContentContainer>
    </Section>
  )
}

export default FindUs;