import "./styles.css";

function Input({ name, type, placeholder, label }) {
    return (
        <div className="input_container">
            <label className="input_label_text">
                {label}
                <input
                    className="input_field"
                    name={name}
                    type={type}
                    placeholder={placeholder}
                />
            </label>
        </div>
    );
}
export default Input;