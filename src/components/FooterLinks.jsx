import tw from "twin.macro";

import ContentContainer from "./ContentContainer";
import Section from "./Section";
import Spoon from "./Spoon";
import Descr from "./Descr";

import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { TfiFacebook } from 'react-icons/tfi';

import { images } from "../constants";


const Content = tw.div`
  flex
  justify-between
  items-center lg:items-start
  flex-col lg:flex-row
`;

const Main = tw.div`
  text-center
  order-1 lg:order-2
`;
const Logo = tw.a`
  block
  font-fancy font-bold
  text-6xl leading-[1.3] tracking-[0.04em]
  uppercase
  text-golden-100
  mb-8
`;
const SubLogo = tw.p`
  font-opensans
  text-base leading-[1.75] tracking-[0.04em]
  text-white
  max-w-[28em]
  mx-auto
`;
const Social = tw.div`
  flex justify-center
  gap-4
  text-[#F5EFDB]
  text-center
  mt-4
`;
const SocialLink = tw.a``;

const Contact = tw.div`
  w-[19.125em]
  pt-12 lg:pt-8
  text-center
  order-2 lg:order-1
`;
const Hours = tw.div`
  w-[19.125em]
  pt-12 lg:pt-8
  text-center
  order-3
`;
const FooterTitle = tw.h4`
  font-fancy
  text-3xl leading-[1.3] tracking-[0.04em]
  text-white
  mb-6
`;
const FooterP = tw.p`
  font-opensans
  text-base leading-[1.75] tracking-[0.04em]
  text-[#aaa]
`;
const FooterPWithMarginTop = tw(FooterP)`mt-2`;
const Copy = tw.div`
  text-center
  mt-20
`;


const FooterLinks = () => {
  return (
    <Section pT='8em' pB='8em'>
      <ContentContainer>
        <Content>
          <Main>
            <Logo href="#">Gerícht</Logo>
            <SubLogo>"The best way to find yourself is to lose yourself in the service of others.”</SubLogo>
            <Spoon centerAligned />
            <Social>
              <SocialLink href='#'>
                <TfiFacebook size={32} />
              </SocialLink>
              <SocialLink href='#'>
                <FiTwitter size={32} />
              </SocialLink>
              <SocialLink href='#'>
                <FiInstagram size={32} />
              </SocialLink>
            </Social>
          </Main>
          <Contact>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterP>9 W 53rd St, New York, NY 10019, USA</FooterP>
            <FooterPWithMarginTop>+1 212-344-1230</FooterPWithMarginTop>
            <FooterP>+1 212-555-1230</FooterP>
          </Contact>
          <Hours>
            <FooterTitle>Working Hours</FooterTitle>
            <FooterP>Monday-Friday:</FooterP>
            <FooterP>08:00 am -12:00 am</FooterP>
            <FooterPWithMarginTop>Saturday-Sunday:</FooterPWithMarginTop>
            <FooterP>07:00am -11:00 pm</FooterP>
          </Hours>
        </Content>
        <Copy>
          <Descr text='2021 Gerícht. All Rights reserved.' />
        </Copy>
      </ContentContainer>
    </Section>
  )
}

export default FooterLinks;