import styled from "styled-components";
const App = () => {
  return (
    <>
      <Title>Hello world</Title>
      <Button primary cm>
        Git hub
      </Button>
      <Button lg>Documentation</Button>
      <MyButton $primary>FAQ</MyButton>
      <MyButton>FAQ</MyButton>
      <TomatoButton>Tomato button</TomatoButton>

      <MyButton as="a" href="#">
        Link with Button styles
      </MyButton>
      <TomatoButton as="a" href="#">
        Link with Tomato Button styles
      </TomatoButton>

      <MyButton>Normal Button</MyButton>
    <MyButton as={ReversedButton}>Custom Button with Normal Button styles</MyButton>
    
    <Link>Unstyled, boring Link</Link>
    <StyledLink>Styled exziting Link</StyledLink>

    </>
  );
};

export default App;

//Title
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

//myButton 
const MyButton = styled.button`
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

//Button style 
const Button = styled.button`
  color: ${(props) => (props.primary ? "blue" : "green")};
  padding: ${(props) => props.cm && "4px"};
  padding: ${(props) => props.lg && "8px 16px"};
  padding: ${(props) => props.xl && "16px 64px"};
  background: ${(props) => (props.primary ? "green" : "blue")};
  background: ${(props) => props.secondary && "grey"};
`;


//tomato
const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;


//reverse
const ReversedButton = (props) => (
  <MyButton {...props} children={props.children.split("").reverse()} />
);

//link
const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);
const StyledLink = styled(Link)`
  color: #BF4F74;
  font-weight: bold;
`;

