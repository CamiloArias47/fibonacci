import './styles.css'

export default function AddForm ({submit}) {
  const calcular = e => {
    e.preventDefault()
    const num = document.getElementById('number').value
    submit(num)
  }

  return (
    <form onSubmit={calcular}>
      <input type="number" id="number" placeholder='Agregar serie'/>
      <input type="submit" value="calcular" />
    </form>
  )
}
