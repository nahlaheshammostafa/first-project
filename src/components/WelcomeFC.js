function WelcomeFC(props) {
    console.log("props", props);
  return (
      <h1>HI, {props.name}!</h1>
  );
}

export default WelcomeFC;