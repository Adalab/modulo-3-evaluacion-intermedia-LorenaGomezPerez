
import '../styles/App.scss';
import originalData from '../data/characters.json';

function App() {
  return (
    <div >
      <header>
        <h1>Frases de friends</h1>
        <nav>
          <label htmlFor="">Filtar por frases</label>
          <input type="text" />
          <label htmlFor="">Filtrar por personajes</label>
          <input type="" placeholder='Todos'></input>
        </nav>
      </header>

      <div>
        <h2>Añadir una nueva frase</h2>
        <label htmlFor="">Frase</label>
        <input type="" /> 
        <label htmlFor="">Personaje</label> 
        <input type="text" />
        <button>Añadir una nueva frase</button>
      </div>
      
    </div>
  );
}

export default App;
