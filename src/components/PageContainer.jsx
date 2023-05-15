import tw from 'twin.macro';

const Container = tw.div`
  mx-auto
  max-w-[90%]
  lg:max-w-[92.5%]
  relative
`;

const PageContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default PageContainer;