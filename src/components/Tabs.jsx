// we set the buttonsContainer default to be menu (like in python).
export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  // We have to create a var with a capital letter
  // so react will not look for a built in tag (starting with a lowercase) and instead
  // look for a created one.
  // Notice that you could also just accept a prop with a capital letter, instead of
  // creating a new val
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
