export default function useFibonnaci () {
  // fibonacci recursivo
  const fibonacciRecursive = async n => {
    if (n <= 1) return n
    const sum = await fibonacciRecursive(n - 1) + await fibonacciRecursive(n - 2)
    return sum
  }

  // fibonacci iterativo
  const fibonacciIterative = n => {
    const fibNums = Array(n).fill(null)
    fibNums[0] = 0
    fibNums[1] = 1
    for (let i = 2; i <= n; i++) {
      fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums[n]
  }

  const getFirstNumsOfSerie = async firstNums => {
    const start = new Date()
    const nums = []
    for (let i = 1; i <= firstNums; i++) {
      const num = await fibonacciRecursive(i)
      nums.push(num)
    }
    const end = new Date()
    const time = end - start
    return { serie: firstNums, nums, time }
  }

  const getFirstNumsOfSerieIterative = firstNums => {
    const start = new Date()
    const nums = []
    for (let i = 1; i <= firstNums; i++) {
      const num = fibonacciIterative(i)
      nums.push(num)
    }
    const end = new Date()
    const time = end - start
    return { serie: firstNums, nums, time }
  }

  const sortSeries = series => {
    const seriesSorted = series.sort((a, b) => {
      if (a.serie > b.serie) return 1
      if (a.serie < b.serie) return -1
      return 0
    })

    return seriesSorted
  }

  return { fibonacciRecursive, fibonacciIterative, getFirstNumsOfSerie, sortSeries, getFirstNumsOfSerieIterative }
}
