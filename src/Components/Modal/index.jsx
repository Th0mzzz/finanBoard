import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import Title from "../Title";
const StyledFiModal = styled.div`
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    background: #00000073;
    display: none;
    top: 0;
    left: 0;
    z-index: 10000;
    padding: 1em;
    &.show{
        display: flex;
    }
    & .fimodal-container{
        background: var(--container);
        border-radius: 20px;
        margin: auto;
        width: 100%;
        max-width: 992px;
        padding: 1.2rem 1.8rem;
        & .fimodal-header{
            color: var(--primary);
            padding: 1rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            & svg{
                cursor: pointer;
                width: 25px;
                height: 25px;
                &:hover{
                    color: var(--primary-hover);
                }
            }
        }
        & .fimodal-body{
        }
    }
`
export default function FiModal({ children, show, setShow, modalTitle, }) {
    return (
        <StyledFiModal className={`${show ? "show" : ""}`}>
            <div className="fimodal-container">

                <div className="fimodal-header">
                    <Title><h3>{modalTitle}</h3></Title>
                    <IoClose onClick={() => closeModal(setShow)} />
                </div>
                <div className="fimodal-body">
                    {children}
                </div>
            </div>
        </StyledFiModal>
    )
}

export const closeModal = (setState) => {
    setState(false)
}

export const openModal = (setState) => {
    setState(true)
}