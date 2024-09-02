export default function Tabs({ children, buttons, ButtonsContainer }) {
  // const ButtonsConatiner = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
