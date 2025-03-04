

"use client";
import { useState, useEffect, useRef, AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import { Bar, Line, Doughnut, Pie, Scatter } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { BsUpload } from "react-icons/bs";
import zoomPlugin from "chartjs-plugin-zoom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Chart from "react-apexcharts";
import { AgCharts } from 'ag-charts-react';
import { AgCartesianChartOptions } from 'ag-charts-community';
import LineChartComponent from "./LineChartComponent";
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, zoomPlugin);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
    fill?: boolean;
  }[]
  meta?: {
    header: string;
    valueName: string;
  };
}

export default function Dashboard() {
  const [chartData, setChartData] = useState<Record<string, ChartData | null>>({
    scatterChartData: null,
    pieChartData: null,
    donutChartData: null,
    lineChartData: null,
    barChartData: null,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedChart, setSelectedChart] = useState<string>("lineChartData");
  const [loading, setLoading] = useState<boolean>(false);
  const [chartWidth, setChartWidth] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [storedProcessedData, setStoredProcessedData] = useState<any>(null); // New state to store processed data
  const [combinedInsights, setCombinedInsights] = useState<any>(null);
  const chartRef = useRef<HTMLDivElement>(null); // Ref for the chart container

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:3012/api/analyze-excel", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Error uploading file.");
      const result = await response.json();
      console.log("result",result.data)
      const combinedInsights = result.data?.questionAnswer + result.data?.insights
      ;
      const processedData = result.data?.processedData;

      if (!processedData) throw new Error("Invalid response structure.");
      console.log("processedData", processedData);

      setStoredProcessedData(processedData); // Store the processed data
      setCombinedInsights(combinedInsights);
      const lightColors = [
        "rgba(173, 216, 230, 0.6)",
        "rgba(144, 238, 144, 0.6)",
        "rgba(255, 182, 193, 0.6)",
        "rgba(255, 228, 181, 0.6)",
        "rgba(221, 160, 221, 0.6)",
        "rgba(240, 230, 140, 0.6)",
      ];

      const generateChartData = (chartType: string): ChartData | null => {
        const chartInfo = processedData[chartType]?.[0];
        if (!chartInfo) return null;

        const labels = Object.keys(chartInfo.data);
        const values = Object.values(chartInfo.data);
console.log("chartType",chartType);

        let chartWidth = 0;
        if (["Line Chart"].includes(chartType)) {
          chartWidth = labels.length * 150;
        } else if (["Bar Chart"].includes(chartType)) {
          chartWidth = labels.length * 150; // Adjust the width for bar chart
        } 
        else if (["Scatter Plot"].includes(chartType)) {
          chartWidth = labels.length * 150; // Adjust the width for bar chart
        }else {
          chartWidth = 400; // Default width for other chart types
        }

        setChartWidth(chartWidth);

        return {
          labels,
          datasets: [
            {
              label: chartInfo.label || chartType,
              data: values as number[],
              backgroundColor: ["Pie Chart", "Donut Chart", "Bar Chart"].includes(chartType)
                ? lightColors.slice(0, labels.length)
                : "rgba(135, 206, 250, 0.6)",
              borderColor: chartType.includes("Line") ? "rgba(135, 206, 250, 1)" : undefined,
              fill: !chartType.includes("Line"),
            },
          ],
          meta: {
            header: chartInfo.header || "default_header",
            valueName: chartInfo.valueName || "default_valueName",
          },
        };
      };

      setChartData({
        scatterChartData: generateChartData("Scatter Plot"),
        pieChartData: generateChartData("Pie Chart"),
        donutChartData: generateChartData("Donut Chart"),
        lineChartData: generateChartData("Line Chart"),
        barChartData: generateChartData("Bar Chart"),
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (!inputValue) return;
  
    const graphData = chartData[selectedChart];
    if (!graphData) return;
  
    const labels = graphData.labels;
    const values = graphData.datasets[0].data;
  
    const dataObject = labels.reduce((obj: { [key: string]: number }, label, index) => {
      obj[label] = values[index];
      return obj;
    }, {});
  
    const chartTypeMapping: Record<string, string> = {
      lineChartData: "Line Chart",
      pieChartData: "Pie Chart",
      donutChartData: "Donut Chart",
      barChartData: "Bar Chart",
      scatterChartData: "Scatter Plot",
    };
  
    const selectedChartType = chartTypeMapping[selectedChart] || selectedChart;
  
    // Filter the stored processed data to include only the selected chart's data
    const filteredProcessedData = {
      [selectedChartType]: storedProcessedData[selectedChartType],
    };
  
    const requestBody = {
      question: inputValue,
      processedData: {
        // Include the stored processed data
        [selectedChartType]: [
          {
            header: graphData.meta?.header || "default_header",
            valueName: graphData.meta?.valueName || "default_valueName",
            label: graphData.datasets[0].label,
            data: filteredProcessedData[selectedChartType]?.[0]?.data,
          },
        ],
      },
    };
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3012/api/answer-analyze-excel?question=${encodeURIComponent(inputValue)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );
      if (!response.ok) throw new Error("Error uploading file.");
      setLoading(false);
      const result = await response.json();
  console.log("response",result)

      console.log("result.data",result.data.data.combinedInsights)
      setCombinedInsights(result.data.data.combinedInsights)
      const processedData = result.data?.processedData;
  
      if (!processedData) throw new Error("Invalid response structure.");
  
      const generateChartData = (chartType: string): ChartData | null => {
        const chartInfo = processedData[chartType]?.[0]; // Use only API response data
        if (!chartInfo) return null;
  
        const labels = Object.keys(chartInfo.data);
        const values = Object.values(chartInfo.data);
        let chartWidth = 0;
        if (["Line Chart"].includes(chartType)) {
          chartWidth = labels.length * 150;
        } else if (["Bar Chart"].includes(chartType)) {
          chartWidth = labels.length * 150; // Adjust the width for bar chart
        } 
        else if (["Scatter Plot"].includes(chartType)) {
          chartWidth = labels.length * 150; // Adjust the width for bar chart
        }else {
          chartWidth = 400; // Default width for other chart types
        }
        setChartWidth(chartWidth);
        return {
          labels,
          datasets: [
            {
              label: chartInfo.label || chartType,
              data: values as number[],
              backgroundColor: ["Pie Chart", "Donut Chart", "Bar Chart"].includes(chartType)
                ? ["rgba(173, 216, 230, 0.6)", "rgba(144, 238, 144, 0.6)", "rgba(255, 182, 193, 0.6)"]
                : "rgba(135, 206, 250, 0.6)",
              borderColor: chartType.includes("Line") ? "rgba(135, 206, 250, 1)" : undefined,
              fill: !chartType.includes("Line"),
            },
          ],
          meta: {
            header: chartInfo.header || "default_header",
            valueName: chartInfo.valueName || "default_valueName",
          },
        };
      };
  
      // Only update chartData without storing in storedProcessedData
      setChartData((prevChartData) => ({
        ...prevChartData,
        [selectedChart]: generateChartData(selectedChartType),
      }));
    } catch (error) {
      // console.error("Error sending request:", error);
    } finally {
      setLoading(false);
    }
  };
  const renderChart = (type: string, ChartComponent: any) => {
    const data = chartData?.[type];
  
    if (!loading && data) {
      const dataLength = data.labels?.length || 0;
  
      // AG Charts for line chart
      if (type === 'lineChartData') {
        console.log("datadata line", data);
        return (
          <div className="w-full  bg-white p-4 rounded-lg shadow">
            <div
        
              className="relative"
            >
              <LineChartComponent type="lineChartData" data={data}/>
              {/* <AgCharts options={agChartOptions} /> */}
            </div>
          </div>
        );
      }
  
      // Fallback for other chart types (Chart.js)
      const maxTicks = Math.floor(600 / 30);
      return (
        <div className="w-full overflow-x-auto overflow-y-hidden bg-white p-4 rounded-lg shadow">
          <div
            style={{
              width: '100%',
              minWidth: ['lineChartData', 'barChartData'].includes(type)
                ? Math.max(600, dataLength * 30) + 'px'
                : '100%',
              height: '600px',
            }}
            className="relative"
          >
            <ChartComponent
              data={data}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: ['pieChartData', 'donutChartData'].includes(type)
                  ? {}
                  : {
                      x: {
                        min: 0,
                        ticks: {
                          autoSkip: false,
                          maxTicksLimit: Math.min(maxTicks, Math.floor(dataLength / 50)),
                          maxRotation: 90,
                          minRotation: 90,
                          padding: 10,
                          font: { size: 12 },
                          align: 'center',
                          callback: (_value: string | number, index: number, values: any[]) => {
                            const interval = Math.max(1, Math.floor(dataLength / maxTicks));
                            if (index % interval !== 0 || (index === values.length - 1 && dataLength > maxTicks)) {
                              return null;
                            }
                            return data.labels[index];
                          },
                        },
                        grid: { display: false },
                      },
                      y: { beginAtZero: true },
                    },
                plugins: {
                  legend: { display: true, position: 'top' },
                  tooltip: { enabled: true, intersect: false, mode: 'index' },
                },
                layout: {
                  padding: { left: 30, right: 30, bottom: 40 },
                },
              }}
            />
          </div>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="flex flex-col w-full md:flex-row h-screen border border-black">
      <div className="w-full md:w-1/4 bg-white p-5 border-t md:border-l md:border-black">
        <h2 className="text-lg font-bold mb-2">Upload File</h2>
        <input type="file" onChange={handleFileChange} className="border p-2 w-full" />
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded flex items-center justify-center mt-4">
          <BsUpload className="mr-2" /> Submit
        </button>
        <div className="flex flex-col space-y-2 mt-4">
          {["lineChartData", "barChartData", "scatterChartData", "pieChartData", "donutChartData"].map((type) => (
            <button key={type} onClick={() => setSelectedChart(type)} className="p-2 bg-gray-300 rounded hover:bg-gray-400">
              {type.replace("ChartData", " Chart")}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/4 bg-gray-100 p-5">
  {loading ? (
    <div className="flex justify-center items-center h-full">
      <div className="spinner-border animate-spin border-t-4 border-blue-500 rounded-full w-12 h-12"></div>
    </div>
  ) : (
    selectedChart && renderChart(selectedChart, { 
      lineChartData: Line, 
      barChartData: Bar, 
      scatterChartData: Scatter, 
      pieChartData: Pie, 
      donutChartData: Doughnut 
    }[selectedChart])
  )}
  <div className="mt-4 flex">
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="border p-2 flex-grow mr-2 rounded"
      placeholder="Enter your text here"
    />
    <button onClick={handleSend} className="bg-green-500 text-white p-2 rounded">
      Send
    </button>
  </div>
  <div className="mt-4 p-4 border border-gray-300 rounded bg-white">
    <h3 className="text-lg font-bold mb-2">Insights</h3>
    {combinedInsights ? (
      <ol className="list-decimal list-inside text-sm text-gray-700 bg-gray-100 p-2 rounded max-h-60 overflow-y-auto">
        {combinedInsights.split('\n').map((insight: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
          <li key={index} className="py-1">{insight}</li>
        ))}
      </ol>
    ) : (
      <p className="text-gray-500">No insights available.</p>
    )}
  </div>
</div>

<style jsx>{`
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }

  .overflow-x-auto::-webkit-scrollbar {
    height: 8px;
  }

  .overflow-x-auto::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  .overflow-x-auto::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  @media (max-width: 768px) {
    .overflow-x-auto > div {
      min-width: 400px;
      height: 300px;
    }
  }
`}</style>
    </div>
  );
}