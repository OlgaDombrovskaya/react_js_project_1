import "./styles.css";

function Button({ buttonName = "Login", onClick = () => { }, type = "button", children }) {
  return (
    <button className="button_component" onClick={onClick} type={type}>
      {!children && buttonName}
      {children}
    </button>
  );
}

export default Button;
