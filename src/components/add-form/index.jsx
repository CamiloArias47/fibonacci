import './styles.css'

export default function AddForm ({submit}) {
  const calcular = e => {
    e.preventDefault()
    const numInput = document.getElementById('number')
    const num = parseInt(numInput.value)
    submit(num)
    numInput.value = null
  }

  return (
    <form onSubmit={calcular}>
      <input type="number" id="number" placeholder='Agregar serie'/>
      <input type="submit" value="calcular" />
    </form>
  )
}
