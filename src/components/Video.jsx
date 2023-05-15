import React, { useRef, useState } from 'react';
import tw from 'twin.macro';

import { IoIosPlay, IoIosPause } from 'react-icons/io';

import { meal } from '../constants';


const Section = tw.div`
  h-[763px]
  relative
`;
const Overlay = tw.div`
  w-full h-full
  absolute inset-0
  bg-black-100/75
  group-hover:bg-black-100/20
  duration-200
`;
const Vid = tw.video`
  h-full w-full
  object-cover
`;
const Controls = tw.div`
  aspect-square
  absolute top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2
  w-[120px]
  cursor-pointer
  hover:scale-[1.02]
  active:scale-[.95]
  duration-200
`;
const Circle = tw.div`
  w-full h-full
  flex items-center justify-center
  rounded-full
  border border-golden-100
  text-white
`;

const Video = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const vidRef = useRef();

  const handlePlay = () => {
    setPlayVideo((prev) => !prev);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <Section className='group'>
      <Overlay></Overlay>
      <Vid
        src={meal}
        ref={vidRef}
        type='video/mp4'
        controls={false}
        autoPlay loop muted
      />
      <Controls>
        <Circle onClick={handlePlay}>
          {playVideo ? <IoIosPause size={50} /> : <IoIosPlay size={50} />}
        </Circle>
      </Controls>
    </Section>
  )
}

export default Video;
