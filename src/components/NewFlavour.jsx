import tw, { styled } from "twin.macro";
import Section from "./Section";
import Subtitle from "./Subtitle";
import Descr from "./Descr";
import MainButton from "./MainButton";

import images from "../constants/images";
import PageContainer from "./PageContainer";
import Spoon from "./Spoon";
import { useEffect, useState } from "react";

const TagsOnLeft = tw.div`
  aspect-square
  absolute left-0
  top-1/2 -translate-y-1/2
  -rotate-90
  hidden lg:flex
  gap-8
  text-white
`;
const ContentContainer = tw.div`
  flex
  max-w-[88.888%] lg:max-w-[85%]
  overflow-hidden
  mx-auto
`;
const Content = tw.div`
  w-full
  shrink-0
  flex
  flex-col lg:flex-row
  items-start lg:items-center
  justify-between
  gap-12 lg:gap-[10%]
  pb-24
  duration-700
  opacity-0
  data-[active=true]:opacity-100
  data-[active=true]:duration-1000
`;
const Text = tw.div``;
const Title = tw.h1`
  font-fancy
  font-bold
  capitalize
  text-[90px]
  leading-tight
  text-golden-100
  mt-2 mb-8
`;
const Image = tw.img`
  max-w-[95%]
  lg:max-w-[48.5%]
`;
const ContentPages = tw.div`
  absolute
  bottom-0
  left-1/2 -translate-x-1/2
  flex items-center
  gap-2
  mx-auto
  w-[100px]
`;
const Number = tw.button`
  cursor-pointer
  text-[#F5EFDB]
  data-[selected=true]:text-[#fff]
  shrink-0
  `;
const NumberGapLine = tw.div`
  h-px
  bg-golden-100
  scale-x-0
  w-0
  data-[show=true]:scale-x-100
  data-[show=true]:w-4
  duration-300
  shrink-0
`;
const Scroll = styled.div(({ showScroll }) => [
  tw`
    fixed
    bottom-[4vh] right-[3.75%]
    font-fancy font-bold
    text-base text-golden-100
    uppercase
    tracking-[0.04em]
    flex flex-col items-center
    gap-4
    p-2
    cursor-pointer
    z-20
    transition-all
    duration-500
    hover:scale-110
    active:scale-100
    active:duration-200
  `,
  showScroll ? tw`opacity-100` : tw`-translate-y-2 opacity-0`,
]);
const Line = tw.div`
  w-px h-10
  bg-golden-100
`;

const NewFlavour = ({ hasBg = false }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [selectedContent, setSelectedContent] = useState(1);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    // alert('chuj')
  }

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const chooseContent = (id, pages) => {
    const elem = pages.querySelector(`#${id}`);
    elem.setAttribute('data-selected', 'true');
    elem.nextSibling?.setAttribute('data-show', true);
    elem.previousSibling?.setAttribute('data-show', true);
    document.querySelector('.contents').querySelector(`#content_${id.slice(-1)}`).setAttribute(
      'data-active', true
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    chooseContent(`page-btn_${selectedContent}`, document.querySelector('.pages'));
    document.querySelector('#content_1').setAttribute('data-active', true)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  return (
    <Section hasBg={hasBg} pT='3em' pB='9.5em'>
      <PageContainer>
        <TagsOnLeft>
          <p>#Bar</p>
          <p>#Gericht</p>
        </TagsOnLeft>
        <ContentContainer className="contents">
          <Content id='content_1' className='content'
            style={{ transform: `translateX(${(-(selectedContent - 1) * 100)}%)` }}
          >
            <Text>
              <Subtitle text='Chase the new Flavour' mB='0.5rem' />
              <Spoon />
              <Title>
                The key to Fine dining
              </Title>
              <Descr
                text='Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus'
                mB='2rem'
              />
              <MainButton title='Explore Menu' />
            </Text>
            <Image src={images.welcome} alt='content-img' />
          </Content>
          <Content id='content_2' className='content'
            style={{ transform: `translateX(${(-(selectedContent - 1) * 100)}%)` }}
          >
            <Text>
              <Subtitle text='Chase the new Flavour' mB='0.5rem' />
              <Spoon />
              <Title>
                it is the second content
              </Title>
              <Descr
                text='Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus'
                mB='2rem'
              />
              <MainButton title='Explore Menu' />
            </Text>
            <Image src={images.welcome} alt='content-img' />
          </Content>
          <Content id='content_3' className='content'
            style={{ transform: `translateX(${(-(selectedContent - 1) * 100)}%)` }}
          >
            <Text>
              <Subtitle text='Chase the new Flavour' mB='0.5rem' />
              <Spoon />
              <Title>
                3rd content
              </Title>
              <Descr
                text='Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus'
                mB='2rem'
              />
              <MainButton title='Explore Menu' />
            </Text>
            <Image src={images.welcome} alt='content-img' />
          </Content>
          <Content id='content_4' className='content'
            style={{ transform: `translateX(${(-(selectedContent - 1) * 100)}%)` }}
          >
            <Text>
              <Subtitle text='Chase the new Flavour' mB='0.5rem' />
              <Spoon />
              <Title>
                4th content
              </Title>
              <Descr
                text='Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus'
                mB='2rem'
              />
              <MainButton title='Explore Menu' />
            </Text>
            <Image src={images.welcome} alt='content-img' />
          </Content>
        </ContentContainer>
        <ContentPages className='pages' onClick={(e) => {
          const pages = e.target.closest('.pages');
          const numbers = pages.querySelectorAll('.number');
          const lines = pages.querySelectorAll('.line');
          const content = document.querySelector('.contents');
          const contents = content.querySelectorAll('.content');

          if (e.target.classList.contains('number')) {
            numbers.forEach(num => {
              num.setAttribute('data-selected', 'false');
            });
            lines.forEach(line => {
              line.setAttribute('data-show', false)
            });
            contents.forEach(child => {
              child.setAttribute('data-active', false);
            });

            setSelectedContent(e.target.id.slice(-1))
            chooseContent(e.target.id, pages);
          }
        }}>
          <NumberGapLine className="line" />
          <Number className='number' id="page-btn_1">1</Number>
          <NumberGapLine className="line" />
          <Number className='number' id="page-btn_2">2</Number>
          <NumberGapLine className="line" />
          <Number className='number' id="page-btn_3">3</Number>
          <NumberGapLine className="line" />
          <Number className='number' id="page-btn_4">4</Number>
          <NumberGapLine className="line" />
        </ContentPages>
        <Scroll showScroll={showScroll} onClick={scrollTop}>
          <Line />
          <p>top</p>
        </Scroll>
      </PageContainer>
    </Section>
  )
}

export default NewFlavour;
