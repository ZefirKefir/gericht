import tw from "twin.macro";

const Item = tw.li`
  text-center
`;
const ALink = tw.a`
  capitalize
  duration-200
  text-golden-100
  hover:text-white
  whitespace-nowrap
`;

const MobileNavListItem = ({ label }) => {
  return (
    <Item>
      <ALink href={`#${label}`}>
        {label}
      </ALink>
    </Item>
  )
}

export default MobileNavListItem;
