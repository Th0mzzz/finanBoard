import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const MonthlyChart = () => {
  const data = {
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
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: false, text: "Incomes & Expenses" },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let value = tooltipItem.raw; // Valor do dado
            return `R$ ${value.toFixed(2)}`; // Formata com "R$" e duas casas decimais
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `R$ ${value}`; // Adiciona "R$" no eixo Y
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default MonthlyChart;
