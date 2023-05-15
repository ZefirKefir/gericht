import tw from 'twin.macro';

const Text = tw.div`
  font-fancy font-bold
  text-2xl leading-[1.3] tracking-[0.04em]
  text-white
`;


const Subtitle = ({ text, mB = 0 }) => {
  return (
    <Text style={{ marginBottom: mB }}>
      {text}
    </Text>
  )
}

export default Subtitle;