import styled from "styled-components";
import Title from "../../Title";

const ContainerStyled = styled.section`
    background: var(--container);
    padding: 1.2rem;
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
    & .content{
        position: relative;
        top: -2.4rem;
        z-index: 20;
        padding: 1rem;
        display: flex;
        flex-flow: row wrap;
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
                <div className="content">
                    {children}
                </div>
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