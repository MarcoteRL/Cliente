import './App.css';
import * as ReactDOM from 'react-dom';

function MyForm() {
  return (
    <form method="">
      <label>Introduce un pokémon:
        <input type="text" name="pokemon" />
      </label>
      <input type="submit" value="enviar"></input>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.pokemon.value);
    return e.target.elements.pokemon.value;
  }
  console.log(handleSubmit);
}

export default App;
