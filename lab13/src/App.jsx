import React, { useState } from "react";

// 1. Basic JSX and non-JSX components
const NoJSXHello = () => React.createElement("h1", null, "Hello, React!");
const JSXHello = () => <h1>Hello, React!</h1>;
const greetingText = "Hello, React!";
const GreetingMessage = () => <h1>{greetingText}</h1>;

// 2. List of three fruits dynamically
const DisplayFruits = () => {
  const fruitArray = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {fruitArray.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

// 3. Styled message using inline CSS
const StyledText = () => (
  <p style={{ color: "blue", fontWeight: "bold" }}>
    This is a styled message.
  </p>
);

// 4. Sum of squares of two numbers
const SquareSum = ({ num1, num2 }) => (
  <p>Sum of squares: {num1 * num1 + num2 * num2}</p>
);

// 5. Conditional Good Morning or Good Evening
const TimeBasedGreeting = ({ morning }) => (
  <p>{morning ? "Good Morning" : "Good Evening"}</p>
);

// 6. Display current day
const ShowDay = () => (
  <p>
    Today is{" "}
    {new Date().toLocaleDateString("en-US", { weekday: "long" })}.
  </p>
);

// 7. Check if a number is prime
const checkPrime = (value) => {
  if (value < 2) return false;
  for (let i = 2; i < value; i++) {
    if (value % i === 0) return false;
  }
  return true;
};

const PrimeValidator = ({ val }) => (
  <p>
    {val} is {checkPrime(val) ? "Prime" : "Not Prime"}.
  </p>
);

// 8. Temperature Converter
// 8. Temperature Converter
class ConvertTemperature extends React.Component {
  state = { fahrenheit: "", celsius: "" };

  handleFahrenheitChange = (event) => {
    const inputF = event.target.value;
    this.setState({
      fahrenheit: inputF,
      celsius: inputF === "" ? "" : (((inputF - 32) * 5) / 9).toFixed(2),
    });
  };

  handleCelsiusChange = (event) => {
    const inputC = event.target.value;
    this.setState({
      celsius: inputC,
      fahrenheit: inputC === "" ? "" : ((inputC * 9) / 5 + 32).toFixed(2),
    });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Fahrenheit"
          value={this.state.fahrenheit}
          onChange={this.handleFahrenheitChange}
        />
        <p>Celsius: {this.state.celsius}</p>
        <input
          type="number"
          placeholder="Celsius"
          value={this.state.celsius}
          onChange={this.handleCelsiusChange}
        />
        <p>Fahrenheit: {this.state.fahrenheit}</p>
      </div>
    );
  }
}


// 9. Reverse string and check palindrome
const ReverseAndCheckPalindrome = ({ inputString }) => {
  const reversedString = inputString.split("").reverse().join("");
  return (
    <p>
      {inputString} reversed is {reversedString}.{" "}
      {inputString === reversedString
        ? "It's a palindrome!"
        : "Not a palindrome."}
    </p>
  );
};

// 10. Random number button
const GenerateRandomNumber = () => {
  const [randomNum, setRandomNum] = useState(null);
  return (
    <div>
      <button
        onClick={() => setRandomNum(Math.floor(Math.random() * 100) + 1)}
      >
        Generate Random
      </button>
      {randomNum !== null && <p>Random Number: {randomNum}</p>}
    </div>
  );
};

// 11. Leap year check
const leapYearCheck = (yearVal) =>
  (yearVal % 4 === 0 && yearVal % 100 !== 0) || yearVal % 400 === 0;

const LeapYearValidator = ({ yearInput }) => (
  <p>
    {yearInput} is {leapYearCheck(yearInput) ? "a Leap Year" : "not a Leap Year"}.
  </p>
);

// 12. User Greeting
class PersonalGreeting extends React.Component {
  render() {
    return (
      <h1>
        Hello, {this.props.fName} {this.props.lName}!
      </h1>
    );
  }
}

const App = () => (
  <div>
    <NoJSXHello />
    <JSXHello />
    <GreetingMessage />
    <DisplayFruits />
    <StyledText />
    <SquareSum num1={3} num2={4} />
    <TimeBasedGreeting morning={true} />
    <ShowDay />
    <PrimeValidator val={7} />
    <ConvertTemperature />
    <ReverseAndCheckPalindrome inputString="React" />
    <GenerateRandomNumber />
    <LeapYearValidator yearInput={2024} />
    <PersonalGreeting fName="John" lName="Doe" />
  </div>
);

export default App;
