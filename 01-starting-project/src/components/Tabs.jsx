export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // const ButtonsConatiner = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
