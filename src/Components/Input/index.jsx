const Input = (props) => {
    if (props.type !== "textarea" && props.type !== "select") {
        return (
            <div className="form-floating mb-3">
                <input
                    type={props.type}
                    name={props.name}
                    className={`form-control ${props.addClass ? props.addClass : ''}`}
                    id={props.inputId}
                    placeholder={props.label}
                    value={props.value}
                    onChange={props.handleChange}
                />
                <label htmlFor={props.inputId}>{props.label}</label>
            </div>
        )
    } else if (props.type === "textarea") {
        return (
            <div className="form-floating">
                <select
                    name={props.name}
                    className="form-select"
                    id={props.inputId}
                    value={props.value}
                >
                    {
                        props.options.map((option, i) => (
                            <option key={i} value={option.value}>{option.name}</option>
                        ))
                    }
                </select>
                <label htmlFor={props.inputId}>{props.label}</label>
            </div>
        )
    } else if (props.type === "select") {
        return (
            <div className="form-floating">
                <textarea
                    className="form-control"
                    name={props.name}
                    placeholder={props.label}
                    id={props.inputId}>
                    {props.value}
                </textarea>
                <label htmlFor={props.inputId}>{props.label}</label>
            </div>
        )
    }

}

export default Input;