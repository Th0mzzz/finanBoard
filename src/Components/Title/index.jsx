import styled from "styled-components";

const TitleCSS = styled.div`
    & h1{
        font-size: clamp(32px, 5vw, 36px);
        font-family: var(--ff-title) ;
        line-height: normal;
    }
    & h2{
        font-size: clamp(26px, 5vw, 32px);
        font-family: var(--ff-subtitle) ;
        line-height: normal;
    }
    & h3{
        font-size: clamp(22px, 5vw, 28px);
        font-weight: bold;
        font-family: var(--ff-text) ;
        line-height: normal;
    }
`
const Title = ({ children }) => {
    return (
        <TitleCSS>
            {children}
        </TitleCSS>
    )
}
export default Title;
