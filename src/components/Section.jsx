import tw, { styled } from 'twin.macro';

import images from '../constants/images';

const Purpose = styled.div(({ hasBg }) => [
  // base styles
  tw`relative  bg-golden-100`,
  // conditional
  hasBg ? tw`bg-black-100` : tw`bg-transparent`,
])

const Section = ({ children, hasBg, pT = 0, pB = 0 }) => {
  return (
    <Purpose style={{ paddingTop: pT, paddingBottom: pB }} hasBg={hasBg}>
      {children}
    </Purpose>
  )
}

export default Section;