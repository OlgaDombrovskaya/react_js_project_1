import "./styles.css";

function Button({ type = "button", name = "Send", onClick = () => {}, children }) {
  return (
    <button className="button_component" onClick={onClick} type={type}>
      {/* {children ? "" : buttonName} */}
      {/* Улосвный рендеринг */}
      {!children && name}
      {children}
    </button>
  );
}

export default Button;
