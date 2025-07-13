import React from "react";
import Chart from "react-apexcharts";
import type {ApexOptions} from "apexcharts";

const Humidity: React.FC = () => {
  const years = [
    2024, 2025, 2026, 2027, 2028, 2029,
    2030, 2031, 2032, 2033, 2034, 2035,
  ];

  const options: ApexOptions = {
    chart: {
      id: "temperature-chart",
      toolbar: { show: false },
    },
    xaxis: {
      categories: years,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: ["#3B82F6"],
        opacityFrom: 0.6,
        opacityTo: 0.1,
      },
    },
    colors: ["#3B82F6"],
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Humidity",
      align: "left",
      style: { fontSize: "16px", fontWeight: "bold" },
    },
  };

  const series = [
    {
      name: "Temperature",
      data: [20000, 30000, 25000, 80000, 50000, 60000, 70000, 90000, 75000, 60000, 65000, 70000],
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-4 mb-6">
      <Chart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default Humidity;