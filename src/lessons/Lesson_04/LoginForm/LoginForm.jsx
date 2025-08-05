import Button from "../Button/Button";
import Input from "../Input/Input";

import "./styles.css";

function LoginForm() {
  // Trigger onClick
  //1 пример: функция прописанна заранее
  // const testFunction = () => {
  //   console.log("Click on button Test works");
  // };

  const login = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Login started")
  }

  return (
    <form onSubmit={login} className="login-form-container">
      <p className="title">Login form</p>
      <div className="inputs-container">
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <Button name="Login" type="submit" />
      {/* 1 пример: функция прописанна заранее */}
      {/* <button type="button" onClick={testFunction}>Test</button> */}
      {/* 2 пример: функция прописанна непосредственно в фигурных скобках в onClick */}
      {/* <button
        type="button"
        onClick={() => {
          console.log("Click on button Test works");
        }}
      >
        Test
      </button> */}
    </form>
  );
}

export default LoginForm;
