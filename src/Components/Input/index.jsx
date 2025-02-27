import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import styled from "styled-components";
const Icon = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    translate: 0 -50%;
    margin: 0 1rem;
    color: var(--primary);
    width: 18px;
    height: 18px;
    z-index: 1;
`
const Input = (props) => {
    const [inputValue, setInputValue] = useState(props.value)
    const applyMask = (val) => {

        val = val.replace(/\D/g, '');

        if (props.mask === 'money') {

            val = val.replace(/\D/g, '');
            if (val.length <= 2) {
                val = val.replace(/(\d{0,2})$/, '$1');
            } else if (val.length <= 5) {
                val = val.replace(/(\d{1})(\d{0,2})$/, '$1.$2');
            } else if (val.length <= 8) {
                val = val.replace(/(\d{1})(\d{3})(\d{0,2})$/, '$1.$2,$3');
            } else if (val.length <= 11) {
                val = val.replace(/(\d{1})(\d{3})(\d{3})(\d{0,2})$/, '$1.$2.$3,$4');
            } else {
                val = val.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{0,2})$/, '$1.$2.$3.$4,$5');
            }
            return `R$${val}`;
        }

        if (props.mask === 'cpf') {

            if (val.length <= 11) {
                val = val.replace(/(\d{3})(\d{3})(\d{3})(\d{2})?/, '$1.$2.$3-$4');
            }
            return val;
        }

        if (props.mask === 'telefone') {
            if (val.length <= 13) {
                // Para números com o código do país e número com 10 dígitos
                val = val.replace(/(\d{2})(\d{2})(\d{4})(\d{4})?/, '+$1 ($2) $3-$4');
            } else {
                // Para números com o código do país e número com 11 dígitos
                val = val.replace(/(\d{2})(\d{2})(\d{5})(\d{4})?/, '+$1 ($2) $3-$4');
            }
            return val;

        }

        return val;
    };

    const handleChangeInput = (e) => {
        if (!props.mask) {
            setInputValue(e.target.value)
        } else {
            const maskedValue = applyMask(e.target.value)
            setInputValue(maskedValue)
        }
        props.handleChange(e)
    }


    if (props.type !== "textarea" && props.type !== "select") {
        return (
            <div className={`form-floating ${props.icon ? "input-icon" : ""}`}>
                <input
                    type={props.type}
                    name={props.name}
                    className={`form-control ${props.addClass ? props.addClass : ''} ${props.icon ? "appearance-none" : ""}`}
                    id={props.inputId}
                    placeholder={props.label}
                    value={inputValue}
                    onChange={(e) => handleChangeInput(e)}
                    maxLength={props.maxLength?? props.maxLength}
                    required={props.required?? props.required}
                />
                {
                    props.icon &&
                    <Icon>
                        {props.icon}
                    </Icon>
                }

                <label htmlFor={props.inputId}>{props.label}</label>
            </div >
        )
    } else if (props.type === "select") {
        return (
            <div className="form-floating select">
                <select
                    name={props.name}
                    className="form-select"
                    id={props.inputId}
                    value={props.value}
                    onChange={props.handleChange}
                >
                    {
                        props.options.map((option, i) => (
                            <option key={i} value={option.value} selected={option.default}>{option.name}</option>
                        ))
                    }
                </select>
                <label htmlFor={props.inputId}>{props.label}</label>
                <Icon><PiCaretDownBold /></Icon>
            </div>
        )
    } else if (props.type === "textarea") {
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

