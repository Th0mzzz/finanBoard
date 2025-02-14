import "./button.css"

const Button = ({ children, type, onClick = null }) => {
    return (
        <button onClick={onClick} className={`button ${type}`}>
            {children}
        </button>
    )
}

export default Button;