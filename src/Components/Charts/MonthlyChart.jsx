import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const MonthlyChart = ({data}) => {
  

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
