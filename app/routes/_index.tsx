import type { MetaFunction } from "@remix-run/node";
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [referredCustomers, setReferredCustomers] = useState([0])
  const [newProjPerMonth, setNewProjPerMonth] = useState([0])
  const [projPerMonth, setProjPerMonth] = useState([0])

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const data = useMemo(()=>{
    let projSum = projPerMonth[0]
    return{
      labels,
      datasets:[
        {
          label: 'Income',
          data:labels.map(()=>{
            projSum = projSum + newProjPerMonth[0]
            return(referredCustomers[0] * 95 + projSum * 0.25)
          })

        }
      ]
    }
  }, [referredCustomers, newProjPerMonth, projPerMonth])

  return (
    <div className="font-sans p-4">
      <span>
      <div className="m-10 text-gray-500 relative">
        <p>Referred Customers Per Month</p>
        <p className="absolute top-0 right-10">{referredCustomers}</p>
        <Slider onValueChange={(value)=>setReferredCustomers(value)}></Slider>
      </div>
      <div className="m-10 text-gray-500 relative">
        <p>Avg. new projects per month</p>
        <p className="absolute top-0 right-10">{newProjPerMonth}</p>
        <Slider onValueChange={(value)=>setNewProjPerMonth(value)}></Slider>
      </div>
      <div className="m-10 text-gray-500 relative">
        <p>Avg. existing projects</p>
        <p className="absolute top-0 right-10">{projPerMonth}</p>
        <Slider onValueChange={(value)=>setProjPerMonth(value)}></Slider>
      </div>
      </span>
      <span>
        <div>
        <Bar options={options} data={data} />
        </div>
      </span>
    </div>
  );
}
