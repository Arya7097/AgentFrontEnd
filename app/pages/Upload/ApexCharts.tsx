import React from "react";
import Chart from "react-apexcharts";

interface ApexChartProps {
  type: 'line' | 'bar' | 'pie' | 'donut' | 'area';
  chartData: Record<string, { series: any[]; categories?: string[] }>;
}

const ApexChartComponent = ({ type, chartData }: ApexChartProps) => {
  if (!chartData?.[type]) return <p>Loading or No Data Available</p>;

  const { series, categories } = chartData[type];

  const options = {
    chart: {
      type: type as ApexChart['type'],
      toolbar: { show: true },
    },
    responsive: [{
      breakpoint: 768,
      options: { legend: { position: "bottom" as const } },
    }],
    xaxis: categories ? { categories } : {},
    legend: { position: "top" as const },
  };

  return (
    <div className="card p-4 border rounded shadow-sm">
      <Chart options={options} series={series} type={type} height={400} />
    </div>
  );
};

export default ApexChartComponent;
