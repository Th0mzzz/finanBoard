import styled from "styled-components";
import { MdOutlineDangerous, MdCheckCircleOutline, MdOutlineWarningAmber } from "react-icons/md";
const StyledReminder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-left: .8rem solid ${props => `var(--${props.$type})`};
    background:var(--background);
    color:var(--secondary);
    padding:.8rem 1.2rem;
    font-size:16px;
    font-family:var(--ff-title);
    border-radius:10px;
    max-width:320px;
    & svg{
        color: ${props => `var(--${props.$type})`};
        width:22px;
        height:22px;
    }
    & h4{
        font-size:18px;
        font-weight: bold;
    }
`

const Reminder = ({ type = "success", text, title }) => {
    let icon = <MdCheckCircleOutline />

    if (type === "success") icon = <MdCheckCircleOutline />
    if (type === "danger") icon = <MdOutlineDangerous />
    if (type === "warning") icon = <MdOutlineWarningAmber />
    return (
        <StyledReminder $type={type}>
            {title ? (
                <>
                    <div className="me-3">
                        <h4>{title ? title : null}</h4>
                        {text}
                    </div>

                </>
            ) : (
                <>
                    {text}
                </>
            )}
            {icon}

        </StyledReminder>
    )
}

export default Reminder;