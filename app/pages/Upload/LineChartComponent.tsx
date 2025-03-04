"use client";
import { useState, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  labels: string[];
  datasets: [{
    label?: string;
    data: number[];
    borderColor?: string;
  }];
  meta?: {
    header?: string;
    valueName?: string;
  };
}

const LineChartComponent = ({ type, data }: { type: string; data: any }) => {
  if (type !== 'lineChartData') return null;

  const ITEMS_PER_PAGE = 50;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data.labels.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Calculate paginated data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
    
    const labels = data.labels.slice(startIndex, endIndex);
    const values = data.datasets[0].data.slice(startIndex, endIndex).map((val: any) => Number(val) || 0);

    return {
      labels,
      values,
      startIndex: startIndex + 1,
      endIndex,
    };
  }, [currentPage, data.labels, data.datasets, totalItems]);

  // Chart.js configuration
  const chartData = {
    labels: paginatedData.labels,
    datasets: [
      {
        label: data.datasets[0].label || 'Line Chart',
        data: paginatedData.values,
        borderColor: data.datasets[0].borderColor || 'rgba(135, 206, 250, 1)',
        backgroundColor: 'rgba(135, 206, 250, 0.2)',
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.1, // Smooth the line
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        display: true,
      },
      title: {
        display: true,
        text: data.datasets[0].label || 'Line Chart',
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: any) => `${context.parsed.y.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: data.meta?.header || 'order_date',
        },
        ticks: {
          autoSkip: false,
          maxRotation:90,
          minRotation:90,
        },
      },
      y: {
        title: {
          display: true,
          text: data.meta?.valueName || 'total_revenue',
        },
        beginAtZero: true,
        ticks: {
          callback: function(tickValue: number | string) {
            return typeof tickValue === 'number' ? tickValue.toFixed(2) : tickValue;
          },
        },
        min: Math.min(...paginatedData.values) * 0.9 || 0,
        max: Math.max(...paginatedData.values) * 1.1 || 100,
      },
    },
  };

  console.log('Chart Data:', chartData);
  console.log('Chart Options:', options);

  // Pagination handlers
  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPage = (page: number) => setCurrentPage(Math.max(1, Math.min(page, totalPages)));

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow flex flex-col">
      <div
        style={{
          width: '100%',
          height: '800px', // Fixed height, adjust as needed
        }}
        className="relative flex-grow"
      >
        <Line data={chartData} options={options} />
      </div>

      {totalItems > ITEMS_PER_PAGE && (
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
            >
              Previous
            </button>

            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
            >
              Next
            </button>
          </div>

          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages} (Showing {paginatedData.startIndex} - {paginatedData.endIndex} of {totalItems} items)
          </span>

          <div className="flex items-center gap-2">
            <label htmlFor="page-input" className="text-sm">Go to page:</label>
            <input
              id="page-input"
              type="number"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => goToPage(parseInt(e.target.value) || 1)}
              className="w-16 px-2 py-1 border rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LineChartComponent;