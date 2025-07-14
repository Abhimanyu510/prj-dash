import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const Humidity: React.FC = () => {
  const [series, setSeries] = useState([
    {
      name: 'Temperature',
      data: generateInitialData(),
    },
  ]);

  const [years, setYears] = useState<number[]>(generateInitialYears());

  const options: ApexOptions = {
    chart: {
      id: 'Humidity Chart',
      animations: {
        enabled: true,
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    xaxis: {
      categories: years.map((y) => y.toString()),
      
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Humidity',
      align: 'left',
    },
    colors:['#22c55e']
  };

  function generateInitialData() {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 20);
  }

  function generateInitialYears() {
    const currentYear = new Date().getFullYear() - 9;
    return Array.from({ length: 10 }, (_, i) => currentYear + i);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeries((prev) => {
        const newData = [...prev[0].data];
        newData.push(Math.floor(Math.random() * 100) + 30);
        newData.shift();
        return [{ ...prev[0], data: newData }];
      });

      setYears((prevYears) => {
        const newYears = [...prevYears];
        newYears.push(newYears[newYears.length - 1] + 1);
        newYears.shift();
        return newYears;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default Humidity;