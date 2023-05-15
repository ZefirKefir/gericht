import tw from "twin.macro";

const ALink = tw.a`
  capitalize
  duration-200
  text-white
  hover:text-gray-400
  whitespace-nowrap
`;

const NavListItem = ({ label }) => {
  return (
    <li>
      <ALink href={`#${label}`}>
        {label}
      </ALink>
    </li>
  )
}

export default NavListItem;
