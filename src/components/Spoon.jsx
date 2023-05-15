import tw, { styled } from 'twin.macro';

import images from '../constants/images';

const Spoo = styled.img(({ rotated, centerAligned, rightAligned, leftAligned }) => [
  tw`mt-2`,
  rotated ? tw`rotate-180` : tw`rotate-0`,
  centerAligned ? tw`mx-auto` : tw`mb-0`,
  rightAligned ? tw`lg:mr-0` : tw`mb-0`,
  leftAligned ? tw`lg:ml-0` : tw`mb-0`,
]);

const Spoon = ({
  rotated = false,
  centerAligned = false,
  rightAligned = false,
  leftAligned = false,
}) => {
  return (
    <Spoo rotated={rotated}
      centerAligned={centerAligned}
      rightAligned={rightAligned}
      leftAligned={leftAligned}
      src={images.spoon} />
  )
}

export default Spoon;