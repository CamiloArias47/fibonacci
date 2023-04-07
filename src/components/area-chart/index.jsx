import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Tiempo de ejecución Fibonacci'
    }
  }
}

export default function AreaChart ({series}) {
  const labels = series.map(serie => serie.serie)
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Fibonacci Recursivo',
        data: series.map(serie => serie.time),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }
  return <Line options={options} data={data} />
}
