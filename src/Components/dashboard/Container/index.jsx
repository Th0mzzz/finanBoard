import styled from "styled-components";
import Title from "../../Title";

const ContainerStyled = styled.section`
    background: var(--container);
    padding: 2rem 3rem;
    border-radius: 20px;
`

const TitleContainer = styled.section`
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    background: var(--container);
    & .title{
        width: 100%;
        background: linear-gradient(to right, var(--primary), var(--primary-hover));
        padding: 1.5rem;
        padding-top: 50px;
        padding-bottom: 80px;
        position: relative;
        z-index: 10;
        & h3{
            color: var(--container);
            text-align: center; 
        }
    }
    
`

const Container = ({ children, type = null, title = null }) => {

    if (type === "titleContainer") {
        return (
            <TitleContainer>
                <div className="title">
                    <Title>
                        <h3>{title}</h3>
                    </Title>
                </div>

                {children}
            </TitleContainer>
        )
    }

    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export default Container;