import tw from 'twin.macro';

const Container = tw.div`
  max-w-[80%]
  large:max-w-[78.625%]
  mx-auto
  relative
`;

const ContentContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ContentContainer;