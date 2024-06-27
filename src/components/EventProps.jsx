export const EventProps = () => {
  const HandleWellcomeUser = (user) => {
    alert(`hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Hey Thanks for Hovering me`);
  };

  return (
    <>
      <WellcomeUser
        onButtonClick={() => HandleWellcomeUser("Asif")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WellcomeUser = (props) => {

  const HandleGreetinds = () => {
    alert("hey wellcom");
    props.onClick();
  };
  return (
    <>
      <button onClick={props.onButtonClick}>Click</button>
      <br />
      <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
      <br />
      <button onClick={HandleGreetinds}>Greetings</button>
    </>
  );
};
