import styled from "styled-components";
import Container from "../../Components/dashboard/Container";
import DadosItem from "../../Components/dashboard/Dados-item";
import { ProgressBar } from "react-bootstrap";
import Title from "../../Components/Title";
import Reminder from "../../Components/Reminder";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import DonutChart from "../../Components/Charts/Charts";
import { useThemeContext } from "../../contexts/theme";
import MonthlyChart from "../../Components/Charts/MonthlyChart";
const DatasRow = styled.div`
        position: relative;
        top: -2.4rem;
        z-index: 20;
        padding: 1rem;
        display: flex;
        flex-flow: row wrap;
    & .datas{
        display: flex;
        width: 100%;
        gap: 1rem;
        flex-flow: wrap;
        justify-content: center;
    }
    `

const SpendContent = styled.div`
display: flex;
flex-direction: column;
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
        --bs-progress-bar-bg: ${props => props.$passed ? "var(--danger)" : "var(--primary)"};
        --bs-progress-bar-transition: width 0.6sease;
        height: var(--bs-progress-height);
        overflow: hidden;
        font-size: var(--bs-progress-font-size);
        background-color: var(--bs-progress-bg);
        border-radius: var(--bs-progress-border-radius);
    }
    `
const ActivityTable = styled.div`
    width: 100%;
    overflow: auto;
    max-height: 400px;
    margin-top: 3rem;
    & table{
        min-width: 100%;
        color: var(--text);
        border-spacing: 0 10px;
        & thead{
            color: var(--primary);
        }
        & th, & td{
            padding: 1rem;
            border-bottom: 10px solid transparent;
        }
        & tbody > tr{
            border-left: 2px solid var(--secondary);
            cursor: pointer;
            transition: all .2s;
            margin-bottom: 1rem;
            &:hover{
                color: var(--primary);
                border-color: var(--primary);
                background: var(--background);
            }
        }
    }
`

const OtherMonths = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 1rem;
    & .section-btns{
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        width: 100%;
        max-width: 280px;
        & .month-btn{
            transition: all .4s;
            outline: none;
            border: none;
            padding: 1rem;
            width: 180px;
            border-radius: 15px 100px 100px 15px;
            font-family: var(--ff-link);
            color: var(--primary); 
            font-weight: 500;
            &.active{
                background: var(--primary-hover);
                color: var(--container);
            }
            &:hover{
                background: var(--background);
            }
        }
    }
`
const Home = () => {
    const { theme } = useThemeContext()
    const expense = 900
    const goal = 1800
    const percentExpenseOfGoal = (expense / goal) * 100
    const datas = [
        { title: "Income", data: "R$2000" },
        { title: "Expense", data: "R$900" },
        { title: "Saving", data: "R$400" },
        { title: "Balance", data: "R$700" }
    ]
    const donutChartData = [
        ["Expenses", "% By total"],
        ["Shopping", 1.22],
        ["Clothing", 1.77],
        ["Housing", 2.06],
        ["Food", 2.11],
        ["Transportation", 2.51],
        ["Others", 0.33],
    ];
    const donutChartOptions = {
        title: null,
        pieHole: 0.4,
        tooltip: { showColorCode: true },
        legend: {
            position: "top",
            textStyle: {
                color: theme === "light" ? "#000" : "#fff", // Cor do texto da legenda (exemplo: preto)
                fontSize: 14, // Tamanho da fonte da legenda
            },
        },
        chartArea: { width: "80%", height: "80%" },
        backgroundColor: "transparent",
    };


    return (
        <>
            <div className="row row-gap-4 mb-4">
                <div className="col-12 col-lg-4">
                    <Container type={"titleContainer"} title={"Monthly Data"}>
                        <DatasRow>
                            <div className="datas">
                                {datas.map((item, i) => <DadosItem key={i} title={item.title} data={item.data} />)}
                            </div>
                        </DatasRow>
                    </Container>
                </div>
                <div className="col-12 col-lg-8 ">
                    <Container>
                        <SpendContent $passed={expense > goal}>
                            <p className="text">You can spend up to</p>
                            <ProgressBar now={percentExpenseOfGoal} />
                            <Title>
                                <h2 style={{ color: expense > goal ? "var(--danger)" : "var(--primary)" }}>R${expense}</h2>
                            </Title>
                            <p className="text">of the <span className="link">R${goal}</span> you planned for this month</p>
                            {expense > goal
                                ? (<Reminder type="danger" text={"Your spending is out of the planned."} />)
                                : (<Reminder type="success" text={"Your spending is under control."} />)
                            }


                            <Link to={"goals"} className="mt-3">
                                <Button type={"primary"}>Manage your spending</Button>
                            </Link>
                        </SpendContent>
                    </Container>
                </div>
            </div>
            <div className="row row-gap-4 mb-4">
                <div className="col-12 col-lg-4">
                    <Container type={"titleContainer"} title={
                        <>
                            Expenses by Category
                            <Title>
                                <h3>R$900</h3>
                            </Title>
                        </>
                    }>

                        <DonutChart
                            data={donutChartData}
                            options={donutChartOptions}
                            width="100%"
                            height="400px"
                            chartType="PieChart"
                        />
                        <div className="w-100 d-flex py-3">
                            <Link to={"expenses"} className="m-auto">
                                <Button type={"primary"}>See all expenses</Button>
                            </Link>
                        </div>
                    </Container>
                </div>
                <div className="col-12 col-lg-8 ">
                    <Container>
                        <Title>
                            <h3 style={{ color: "var(--primary)" }}>Recent Activity</h3>
                        </Title>

                        <ActivityTable>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Value</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        <th>Hour</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Saving</td>
                                        <td>R$50,00</td>
                                        <td>New SmartPhone</td>
                                        <td>01/01/2025</td>
                                        <td>19:01</td>
                                    </tr>
                                    <tr>
                                        <td>Expense</td>
                                        <td>-R$226,00</td>
                                        <td>Benfica BusPass</td>
                                        <td>01/01/2025</td>
                                        <td>15:00</td>
                                    </tr>
                                    <tr>
                                        <td>Income</td>
                                        <td>+R$1900,00</td>
                                        <td>Salary</td>
                                        <td>01/01/2025</td>
                                        <td>12:00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to={"actions"} >
                                <Button type={"primary"}>See more</Button>
                            </Link>
                        </ActivityTable>
                    </Container>
                </div>
            </div>
            <div className="row row-gap-4 mb-4">
                <Container>
                    <Title>
                        <h3 style={{ color: "var(--primary)" }}>Other Months</h3>
                    </Title>
                    <OtherMonths>
                        <div className="section-btns">
                            <button className="month-btn active">
                                2025
                            </button>
                            <button className="month-btn">
                                2024
                            </button>
                            <button className="month-btn">
                                2023
                            </button>
                        </div>
                        <div className="sections-charts w-100" style={{ maxWidth: "992px" }}>
                            <div className="chart w-100 p-2" style={{ minHeight: "300px", background: "#fff", borderRadius: "20px" }} >
                                <MonthlyChart data={{
                                    labels: [
                                        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                                    ],
                                    datasets: [
                                        {
                                            label: "Expenses",
                                            data: [500, 700, 450, 600, 800, 400, 900, 650, 500, 720, 780, 1650],
                                            backgroundColor: "#E52020",
                                            borderColor: "rgba(255, 99, 132, 1)",
                                            borderWidth: 1,
                                        },
                                        {
                                            label: "Incomes",
                                            data: [1000, 1200, 950, 1300, 1400, 1100, 1500, 1250, 1350, 1480, 1550, 1400],
                                            backgroundColor: "#5CB338",
                                            borderColor: "rgba(75, 192, 192, 1)",
                                            borderWidth: 1,
                                        },
                                    ],
                                }} />
                            </div>
                        </div>
                    </OtherMonths>
                </Container>
            </div>
        </>
    )
}

export default Home;