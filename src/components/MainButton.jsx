import tw from 'twin.macro';

const Button = tw.button`
  font-fancy font-bold
  tracking-[0.04rem]
  text-base leading-[1.75]
  py-2 px-8
  text-black-100
  bg-golden-100
  duration-500
  hover:scale-105 active:duration-150
  active:scale-95
`;

const MainButton = ({ title }) => {
  return (
    <Button>{title}</Button>
  )
}

export default MainButton;