import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import Container from "../../Components/dashboard/Container";
import Input from "../../Components/Input";
import Table, { TableMenu } from "../../Components/Table";
import Title from "../../Components/Title";
import FiModal, { openModal } from "../../Components/Modal";
import { MdDateRange, MdOutlineAccessTime } from "react-icons/md";
import DonutChart from "../../Components/Charts/Charts";
import { useThemeContext } from "../../contexts/theme";
export default function IncomePage() {
    const { theme } = useThemeContext()
    const [incomeShow, setIShow] = useState(false)
    const [cat, setCat] = useState("0")
    const [incomeForm, setIncForm] = useState({ value: "", description: "", date: "", hour: "", category: "" })

    const cateChange = (e) => {
        setCat(e.target.value);
    };
    const handleChange = (e) => {
        setIncForm({ ...incomeForm, [e.target.name]: e.target.value });
    };
    const endpointAPI = [
        {
            value: 750,
            description: "Serra Company",
            date: "03/03/2025",
            hour: "10:54",
            category: "3"
        },
        {
            value: 226,
            description: "Brownie Sales",
            date: "03/03/2025",
            hour: "10:54",
            category: "1"
        },
        {
            value: 3800,
            description: "Salary",
            date: "01/03/2025",
            hour: "18:00",
            category: "2"
        },

    ]
    const [overviewData, setOvData] = useState(endpointAPI)

    useEffect(() => {
        setOvData(endpointAPI.filter(data => {
            if (cat !== "0") {
                return data.category === cat
            }
            return endpointAPI
        }))
    }, [cat])

    const categorys =
        [
            { value: "1", name: "Sales" },
            { value: "2", name: "Salary" },
            { value: "3", name: "FreeLancer" }
        ]
    let allIncome = 0

    const dinamicData = categorys.map(category => {
        let valorCategoria = 0

        endpointAPI.forEach(data => {
            if (data.category === category.value) {
                valorCategoria += data.value
            }
        })
        allIncome += valorCategoria
        return [category.name, valorCategoria]
    })
    const donutChartData = [
        ["Incomes", "% By total"],
        ...dinamicData
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
    const filterCategories = [{ value: "0", name: "All", default: true }, ...categorys,]
    return (
        <>
            <div className="row mb-4">
                <div className="col-12">
                    <Container>
                        <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                            <Title>
                                <h3 style={{ color: "var(--primary)" }}>Income Overview</h3>
                            </Title>
                            <Button type={"primary"} onClick={() => openModal(setIShow)}>
                                Register An Income
                            </Button>
                        </div>
                        <TableMenu>
                            <Input
                                type={"select"}
                                name="incomeCategory"
                                id={"incomeCategory"}
                                value={cat}
                                handleChange={cateChange}
                                options={filterCategories}
                                label="Category"
                            />
                        </TableMenu>
                        {
                            overviewData.length > 0
                                ? (
                                    <Table head={["Type", "Value", "Description", "Date", "Hour", "Category"]}>
                                        {
                                            overviewData.map((data, i) => (
                                                <tr key={i}>
                                                    <td>Income</td>
                                                    <td>{data.value}</td>
                                                    <td>{data.description}</td>
                                                    <td>{data.date}</td>
                                                    <td>{data.hour}</td>
                                                    <td>{categorys.map(cat => cat.value === data.category ? cat.name : "")}</td>
                                                </tr>
                                            ))}
                                    </Table>
                                ) : (
                                    <p className="text w-100 text-center">
                                        Any data founded
                                    </p>
                                )

                        }


                    </Container>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12 col-md-5">
                    <Container type={"titleContainer"} title={
                        <>
                            Incomes by Category
                            <Title>
                                <h3>R${allIncome}</h3>
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
                        </div>
                    </Container>
                </div>
            </div>

            <FiModal show={incomeShow} setShow={setIShow} modalTitle="Register An Income">
                <form method="post">
                    <div className="row row-gap-3 mb-3">
                        <div className="col-12 col-md-4">
                            <Input
                                type={"text"}
                                name={"value"}
                                id={"value"}
                                value={incomeForm.value}
                                handleChange={handleChange}
                                label="Value"
                                mask="money"
                                maxLength="20"
                                required={true}
                            />
                        </div>
                        <div className="col-12 col-md-5">
                            <Input
                                type={"text"}
                                name={"description"}
                                id={"description"}
                                value={incomeForm.description}
                                handleChange={handleChange}
                                label="Description"
                                required={true}

                            />
                        </div>
                        <div className="col-12 col-md-3">
                            <Input
                                type={"date"}
                                name={"date"}
                                id={"date"}
                                value={incomeForm.date}
                                handleChange={handleChange}
                                label="Date"
                                icon={<MdDateRange />}
                            />
                        </div>
                        <div className="col-12 col-md-3">
                            <Input
                                type={"time"}
                                name={"hour"}
                                id={"hour"}
                                value={incomeForm.hour}
                                handleChange={handleChange}
                                label="Hour"
                                icon={<MdOutlineAccessTime />}
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <Input
                                type={"select"}
                                name="category"
                                id={"category"}
                                value={incomeForm.category}
                                handleChange={handleChange}
                                options={categorys}
                                label="Category"
                                required={true}
                            />
                        </div>
                    </div>
                    <Button
                        type={"primary"}
                    >
                        Register Income
                    </Button>
                </form>
            </FiModal>
        </>
    )
}

