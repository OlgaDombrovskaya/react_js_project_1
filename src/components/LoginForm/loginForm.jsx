import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
    return (
        <form className="login_form">
            <h2 className="form_title">Login form</h2>
            <Input label="Email" name="email" type="email" placeholder="Enter your email" />
            <Input label="Password" name="password" type="password" placeholder="Enter your password" />
            <Button type="submit" buttonName="Login" />
        </form>
    );
}

export default LoginForm;
