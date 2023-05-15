import tw from 'twin.macro';

const Text = tw.h2`
  font-fancy font-semibold
  capitalize
  text-[4rem] leading-[1.3]
  tracking-[0.03em]
  text-golden-100
`;

const Title = ({ text, mT = 0, mB = 0 }) => {
  return (
    <Text style={{ marginTop: mT, marginBottom: mB }}>{text}</Text>
  )
}

export default Title;
