import { useEffect, useState, useRef } from 'react'
import useFibonnaci from './hooks/useFibonnaci'
import Serie from './components/series'
import AreaChart from './components/area-chart'
import AddForm from './components/add-form'
import CalculatingModal from './components/modal'
import './App.css'

function App () {
  const { getFirstNumsOfSerie, sortSeries, getFirstNumsOfSerieIterative } = useFibonnaci()
  const seriesRendered = useRef([3, 5, 7, 10])
  const seriesRenderedIterative = useRef([3, 5, 7, 10])
  const [fibSeries, setFibSeries] = useState([])
  const [fibSeriesIterative, setFibSeriesIterative] = useState([])
  const [isExecuting, setIsExecuting] = useState(false)
  useEffect(() => {
    const generateRecursive = async () => {
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

    const generateIterative = () => {
      const first3 = getFirstNumsOfSerieIterative(3)
      const first5 = getFirstNumsOfSerieIterative(5)
      const first7 = getFirstNumsOfSerieIterative(7)
      const first10 = getFirstNumsOfSerieIterative(10)

      const series = [
        { ...first3 },
        { ...first5 },
        { ...first7 },
        { ...first10 }
      ]

      setFibSeriesIterative(series)
    }

    generateIterative()
    generateRecursive()
  }, [])

  const addSerieToRecursive = async num => {
    setIsExecuting(true)
    console.log('ejecutando...')
    const newSerie = await getFirstNumsOfSerie(num)
    console.log('finish...')
    setIsExecuting(false)
    const exist = seriesRendered.current.find(serie => serie === num)
    if (exist === undefined) {
      const newSeries = structuredClone(fibSeries)
      newSeries.push(newSerie)
      seriesRendered.current = [...seriesRendered.current, num]
      const seriesOrdered = sortSeries(newSeries)
      setFibSeries(seriesOrdered)
    }
  }

  const addSerieToIterative = async num => {
    const newSerie = getFirstNumsOfSerieIterative(num)
    const exist = seriesRenderedIterative.current.find(serie => serie === num)
    if (exist === undefined) {
      const newSeries = structuredClone(fibSeriesIterative)
      newSeries.push(newSerie)
      seriesRenderedIterative.current = [...seriesRenderedIterative.current, num]
      const seriesOrdered = sortSeries(newSeries)
      setFibSeriesIterative(seriesOrdered)
    }
  }

  const modal = isExecuting ? <CalculatingModal /> : ''

  return (
    <>
      <div className="App">
        <div className="frame__block frame__block--left">
          <h1>Fibonacci Recursivo</h1>
          <div className='series'>
          <AreaChart series={fibSeries}/>
          <AddForm submit={addSerieToRecursive} blockInput={isExecuting}/>
          <Serie series={fibSeries}/>
          </div>
        </div>
        <div className="frame__block frame__block--right">
          <h1>Fibonacci Iterativo</h1>
          <AreaChart series={fibSeriesIterative}/>
          <AddForm submit={addSerieToIterative}/>
          <Serie series={fibSeriesIterative}/>
        </div>
      </div>
      { modal }
    </>
  )
}

export default App
