export default function useFibonnaci () {
  const fibonacciRecursive = async n => {
    if (n <= 1) return n
    const sum = await fibonacciRecursive(n - 1) + await fibonacciRecursive(n - 2)
    return sum
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

  return { fibonacciRecursive, getFirstNumsOfSerie }
}
