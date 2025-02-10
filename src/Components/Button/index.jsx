import "./button.css"

const Button = ({ children, color, type = null }) => {
    return (
        <button type={type} className={`btn ${color}`}>
            {children}
        </button>
    )
}

export default Button;