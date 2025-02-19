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
    margin:1.3rem 0;
    & svg{
        color: ${props => `var(--${props.$type})`};
        width:22px;
        height:22px;
    }
`

const Reminder = ({ type = "success", text }) => {
    let icon = <MdCheckCircleOutline />

    if (type === "success") icon = <MdCheckCircleOutline />
    if (type === "danger") icon = <MdOutlineDangerous />
    if (type === "warning") icon = <MdOutlineWarningAmber />
    return (
        <StyledReminder $type={type}>
            {text}
            {icon}
        </StyledReminder>
    )
}

export default Reminder;