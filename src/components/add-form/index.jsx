import { useRef } from 'react'
import './styles.css'

export default function AddForm ({ submit, blockInput }) {
  const calcular = e => {
    e.preventDefault()
    const form = new FormData(e.target)
    let num = form.get('number')
    if (num) {
      num = parseInt(num)
      submit(num)
      e.target.reset()
    }
  }

  return (
    <form onSubmit={calcular}>
      <input type="number" id="number" name='number' placeholder='Agregar serie'/>
      <input type="submit" value="calcular" disabled={blockInput}/>
    </form>
  )
}
