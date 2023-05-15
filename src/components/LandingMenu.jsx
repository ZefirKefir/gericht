import tw from 'twin.macro';

import images from '../constants/images';
import wines from '../constants/data';

import Section from './Section';
import ContentContainer from './ContentContainer';
import Subtitle from './Subtitle';
import Spoon from './Spoon';
import Title from './Title';
import MainButton from './MainButton';

const Content = tw.div`
  text-center
`;
const Menu = tw.div`
  flex flex-col lg:flex-row 
  items-center lg:items-start justify-between
  gap-12 lg:gap-0
  my-16
  w-full
`;
const MenuSlice = tw.div`
  text-center
  w-full
`;
const Wines = tw(MenuSlice)`order-2 lg:order-1`;
const Cocktails = tw(MenuSlice)`order-3`;
const MenuTitle = tw.h3`
  font-fancy font-semibold
  text-[45px] leading-[1.3] tracking-[0.04em]
  capitalize
  text-white
  mb-12
`;
const MenuList = tw.div`
  flex flex-col
  gap-10
  w-full
`;
const MenuItem = tw.div``;
const ItemMain = tw.div`
  flex items-center
  justify-between gap-5
`;
const ItemTitle = tw.h4`
  font-fancy font-bold
  text-[23px] leading-[1.3] tracking-[0.04em]
  text-golden-100
  whitespace-nowrap
`;
const ItemLine = tw.div`
  h-px
  basis-14
  grow
  shrink
  bg-[#fafafa]
`;
// cloning example btw
const ItemPrize = tw(ItemTitle)`font-fancy-numbers text-white`
const ItemTags = tw.p`
  mt-2
  font-opensans
  text-left text-base
  leading-[1.75] tracking-[0.04em]
  text-[#aaa]
`;
const MenuImg = tw.img`
  order-1 lg:order-2
  max-w-[70%]
  lg:max-w-[30%]
  mx-6
`;

const LandingMenu = ({ hasBg }) => {
  return (
    <Section hasBg={hasBg} pT='8em' pB='8em'>
      <ContentContainer>
        <Content>
          <Subtitle text='Menu that fits you palatte' mB='0.5em' />
          <Spoon centerAligned />
          <Title text='Today’s Special' />

          <Menu>
            <Wines>
              <MenuTitle>Wine & Beer</MenuTitle>
              <MenuList>
                {wines.wines.map(item => (
                  <MenuItem>
                    <ItemMain>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemLine />
                      <ItemPrize>{item.price}</ItemPrize>
                    </ItemMain>
                    <ItemTags>{item.tags}</ItemTags>
                  </MenuItem>
                ))}
              </MenuList>
            </Wines>
            <MenuImg src={images.menu} alt='menu' />
            <Cocktails>
              <MenuTitle>Cocktails</MenuTitle>
              <MenuList>
                {wines.cocktails.map(item => (
                  <MenuItem>
                    <ItemMain>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemLine />
                      <ItemPrize>{item.price}</ItemPrize>
                    </ItemMain>
                    <ItemTags>{item.tags}</ItemTags>
                  </MenuItem>
                ))}
              </MenuList>
            </Cocktails>
          </Menu>

          <MainButton title='View More' />
        </Content>
      </ContentContainer>
    </Section>
  )
}

export default LandingMenu