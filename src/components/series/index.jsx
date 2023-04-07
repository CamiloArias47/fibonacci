import './styles.css'
export default function Serie ({ series }) {
  const rows = series.map(row => {
    return (
      <>
        <div>{row.serie}</div>
        <div className='series-table__serie'>{row.nums.join(', ')}</div>
        <div>{row.time} ms</div>
      </>
    )
  })

  return (
    <div className="series-table">
      <div className='series-table__title'>Serie</div>
      <div className='series-table__title'>Números</div>
      <div className='series-table__title'>Tiempo</div>
      { rows }
    </div>
  )
}
