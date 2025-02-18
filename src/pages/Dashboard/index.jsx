import styled from "styled-components";
import Container from "../../Components/dashboard/Container";
import DadosItem from "../../Components/dashboard/Dados-item";
import { ProgressBar } from "react-bootstrap";
import Title from "../../Components/Title";

const Home = () => {

    const datas = [
        { title: "Income", data: "R$2000" },
        { title: "Expense", data: "R$900" },
        { title: "Saving", data: "R$400" },
        { title: "Balance", data: "R$700" }
    ]

    const DatasRow = styled.div`
        display: flex;
        width: 100%;
        gap: 1rem;
        flex-flow: wrap;
        justify-content: center;
    `

    const SpendContent = styled.div`
    .text{
        color: var(--secondary);
    }
    & .progress{
        --bs-progress-height: .8rem;
        --bs-progress-font-size: 0.75rem;
        --bs-progress-bg: var(--background);
        --bs-progress-border-radius: var(--bs-border-radius);
        --bs-progress-box-shadow: var(--bs-box-shadow-inset);
        --bs-progress-bar-color: #fff;
        --bs-progress-bar-bg: var(--primary);
        --bs-progress-bar-transition: width 0.6sease;
        height: var(--bs-progress-height);
        overflow: hidden;
        font-size: var(--bs-progress-font-size);
        background-color: var(--bs-progress-bg);
        border-radius: var(--bs-progress-border-radius);
    }
    `
    return (
        <>
            <div className="row row-gap-4">
                <div className="col-12 col-lg-4">
                    <Container type={"titleContainer"} title={"Monthly Data"}>
                        <DatasRow>
                            {datas.map((item, i) => <DadosItem key={i} title={item.title} data={item.data} />)}
                        </DatasRow>
                    </Container>
                </div>
                <div className="col-12 col-lg-8 ">
                    <Container>
                        <SpendContent>
                            <p className="text">You can spend up to</p>
                            <ProgressBar now={60} />
                            <Title>
                                <h2 style={{color:"var(--primary)"}}>R$900</h2>
                            </Title>
                        </SpendContent>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Home;