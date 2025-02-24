import { Chart } from "react-google-charts";

export default function DonutChart({ data, options, width = "100%", height = "400px", chartType = "PieChart" }) {
    return (
        <Chart
            chartType={chartType}
            width={width}
            height={height}
            data={data}
            options={options}
        />
    );
}