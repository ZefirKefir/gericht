import React, { useRef } from 'react';
import tw, { styled } from 'twin.macro';

import { IoLogoInstagram } from 'react-icons/io'
import Section from './Section';
import Title from './Title';
import Subtitle from './Subtitle';
import Spoon from './Spoon';
import Descr from './Descr';
import MainButton from './MainButton';

import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

import { images } from '../constants';
const sliderImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.bad,
  images.messyMeal,
  images.coffeeTime,
  images.elegant,
  images.pierogs,
  images.pancake,
  images.resta,
  images.instapic,
];

const Container = tw.div`
  pl-12 md:pl-16 lg:pl-24
`;
const Content = tw.div`
  flex items-start lg:items-center
  flex-col lg:flex-row
  gap-12 lg:gap-16
`;
const Text = tw.div`
  max-w-[32em]
`;
const Relative = tw.div`
  relative
  grow
  w-full
  overflow-hidden
  scroll-smooth
`;
const Slider = tw.div`
  flex gap-8
  overflow-scroll
  relative
  snap-x snap-mandatory
  scroll-smooth
`;
const SliderItem = tw.div`
  w-[300px]
  aspect-[2/3]
  relative
  overflow-hidden
  shrink-0
  cursor-pointer
  snap-start
`
const Arrow = tw.div`
  absolute
  top-1/2 -translate-y-1/2
  text-5xl
  text-golden-100
  bg-black-100
  rounded-md
  cursor-pointer
  z-20
  hover:scale-105
  active:scale-100
  duration-200
`;
const LeftArrow = tw(Arrow)`left-4`;
const RightArrow = tw(Arrow)`right-4`;
const Layer = tw.div`
  absolute inset-0
  bg-[#000]/60
  opacity-0 group-hover:opacity-100
  duration-200
  z-10
`;
const InstaIcon = tw.div`
  absolute
  top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2
  text-5xl
  text-gray-200
  opacity-0 group-hover:opacity-100
  duration-300
  z-10
`;
const Image = tw.img`
  w-full h-full
  object-cover object-center
  group-hover:scale-105
  duration-100
`;


const Gallery = ({ hasBg }) => {
  const galleryRef = useRef(null);
  const scroll = (direction) => {
    const { current } = galleryRef;

    if (direction === 'left') {
      current.scrollLeft -= 250;
    } else {
      current.scrollLeft += 250;
    }
  }
  return (
    <Section hasBg={hasBg} pT='3.5em' pB='3.5em'>
      <Container>
        <Content>
          <Text>
            <Subtitle text='Instagram' />
            <Spoon />
            <Title text='Photo Gallery' mT='0.5rem' mB='1.5rem' />
            <Descr
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.'
              mB='1.5em'
            />
            <MainButton title='View More' />
          </Text>
          <Relative>
            <LeftArrow onClick={() => scroll('left')}>
              <BsArrowLeftShort />
            </LeftArrow>
            <RightArrow onClick={() => scroll('right')}>
              <BsArrowRightShort />
            </RightArrow>
            <Slider className='hide_scrollbar' ref={galleryRef}>
              {sliderImages.map((item, index) => (
                <SliderItem className='group'>
                  <Layer></Layer>
                  <InstaIcon href='#'>
                    <IoLogoInstagram />
                  </InstaIcon>
                  <Image src={item} alt='gallery-image' key={`gallery-${index}`} />
                </SliderItem>
              ))}
            </Slider>
          </Relative>
        </Content>
      </Container>
    </Section>
  )
}

export default Gallery;