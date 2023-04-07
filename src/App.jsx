import { useEffect, useState, useRef } from 'react'
import useFibonnaci from './hooks/useFibonnaci'
import Serie from './components/series'
import AreaChart from './components/area-chart'
import AddForm from './components/add-form'
import './App.css'

function App () {
  const { getFirstNumsOfSerie, sortSeries } = useFibonnaci()
  const seriesRendered = useRef([3, 5, 7, 10])
  const [fibSeries, setFibSeries] = useState([])
  useEffect(() => {
    const getFirst3nums = async () => {
      const first3 = await getFirstNumsOfSerie(3)
      const first5 = await getFirstNumsOfSerie(5)
      const first7 = await getFirstNumsOfSerie(7)
      const first10 = await getFirstNumsOfSerie(10)

      const series = [
        { ...first3 },
        { ...first5 },
        { ...first7 },
        { ...first10 }
      ]

      setFibSeries(series)
    }

    getFirst3nums()
  }, [])

  const addSerieToRecursive = async num => {
    const newSerie = await getFirstNumsOfSerie(num)
    const exist = seriesRendered.current.find(serie => serie === num)
    console.log({ exist })
    if (exist === undefined) {
      const newSeries = structuredClone(fibSeries)
      newSeries.push(newSerie)
      seriesRendered.current = [...seriesRendered.current, num]
      const seriesOrdered = sortSeries(newSeries)
      setFibSeries(seriesOrdered)
    }
  }

  return (
    <div className="App">
      <div className="frame__block frame__block--left">
        <h1>Fibonacci Recursivo</h1>
        <div className='series'>
         <AreaChart series={fibSeries}/>
         <AddForm submit={addSerieToRecursive}/>
         <Serie series={fibSeries}/>
        </div>
      </div>
      <div className="frame__block frame__block--right">
        <h1>Fibonacci Iterativo</h1>
      </div>
    </div>
  )
}

export default App
