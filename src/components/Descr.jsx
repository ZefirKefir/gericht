import tw from 'twin.macro';

const Span = tw.span`
  inline
  font-opensans
  text-base leading-[1.75]
  tracking-[0.04em]
  text-[#aaa]
`;

const Descr = ({ text, mT = 0, mB = 0 }) => {
  return (
    <p style={{ marginTop: mT, marginBottom: mB }}>
      <Span>{text}</Span>
    </p>
  )
}

export default Descr;