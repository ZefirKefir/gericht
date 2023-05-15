import tw from "twin.macro";

import Navbar from "./Navbar";
import PageContainer from "./PageContainer";

const Head = tw.header`
  py-4 lg:py-5
  
  bg-black-100
`;

const Header = () => {
  return (
    <Head>
      <PageContainer>
        <Navbar />
      </PageContainer>
    </Head>
  )
}

export default Header;