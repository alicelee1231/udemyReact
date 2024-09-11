import Header from "./component/Header";
import UserInput from "./component/UserInput";
import Result from "./component/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIdValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIdValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inputIdValid && <Result input={userInput} />}
    </>
  );
}

export default App;
