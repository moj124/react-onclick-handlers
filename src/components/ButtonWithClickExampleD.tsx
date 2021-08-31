function ButtonWithClickExampleD(): JSX.Element {
  return (
    <button
      onClick={function () {
        window.open("https://www.w3schools.com");
      }}
    >
      My handler is an anonymous function
    </button>
  );
}

export default ButtonWithClickExampleD;
