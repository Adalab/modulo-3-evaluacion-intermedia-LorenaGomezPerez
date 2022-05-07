import "../styles/App.scss";
import originalData from "../data/characters.json";
import { useState, useEffect } from "react";
import getDataQuotes from "../services/fetch";

function App() {
  //Variables de estado
  //fetch, listado de frases completas, añadir frase, filtrar por frase, filtrar por personaje

  const [DataQuotes, setDataQuotes] = useState([]);
  const [data, setdata] = useState(originalData);
  const [newList, setNewList] = useState({
    quote: "",
    character: "",
  });
  const [dataFilter, setDataFilter] = useState("");
  const [dataCharacter, setDataCharacter] = useState("All");

  // Fetch

  useEffect(() => {
    if (DataQuotes.length === 0) {
      getDataQuotes().then((datafromAPI) => {
        setDataQuotes(datafromAPI);
      });
    }
  }, []);

  //Hago map para recorrer el array y lo pinte

  const html = data
    .filter((quoteFilter) =>
      quoteFilter.quote.toLowerCase().includes(dataFilter.toLowerCase())
    )
    .filter((characterFilter) => {
      if (dataCharacter === "All") {
        return true;
      } else if (dataCharacter === characterFilter.character) {
        return true;
      } else {
        return false;
      }
    })
    // .filter((characterFilter) =>
    //   characterFilter.character.includes(dataCharacter)
    // )
    .map((dataCharacter, index) => (
      <li key={index}>
        <p>{dataCharacter.quote}</p>
        <p>{dataCharacter.character}</p>
      </li>
    ));

  //Función manejadora para añadir nueva frase

  const handleNewList = (ev) => {
    setNewList({
      ...newList,
      [ev.target.name]: ev.target.value,
    });
  };

  //Función manejadora del botón

  const handleClickButton = () => {
    setdata([...data, newList]);
    setNewList({
      quote: "",
      character: "",
    });
  };

  //función para controlar el formulario

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  //función manejadora para controlar el filtrado por frase

  const handleFilterData = (ev) => {
    setDataFilter(ev.target.value);
  };

  //función manejadora para controlar el filtrado por personaje

  const handleFilterCharacter = (ev) => {
    setDataCharacter(ev.target.value);
  };

  return (
    <div>
      <header>
        <h1>Frases de friends</h1>
        <form onSubmit={handleForm}>
          <label htmlFor="listPhrase">Filtrar por frases</label>
          <input type="text" value={dataFilter} onChange={handleFilterData} />
          <label htmlFor="list">Filtrar por personajes</label>
          <select
            name="list"
            id="list"
            value={dataCharacter}
            onChange={handleFilterCharacter}
          >
            <option value="All">Todos</option>
            <option>Ross</option>
            <option>Phoebe</option>
            <option>Joey</option>
            <option>Rachel</option>
            <option>Monica</option>
            <option>Chandler</option>
          </select>
        </form>
      </header>
      <main>
        <ul>{html}</ul>
      </main>

      <form onSubmit={handleForm}>
        <h2>Añadir una nueva frase</h2>
        <label htmlFor="quote">Frase</label>
        <input
          type="text"
          name="quote"
          value={newList.quote}
          onChange={handleNewList}
        />
        <label htmlFor="character">Personaje</label>
        <input
          type="text"
          name="character"
          value={newList.character}
          onChange={handleNewList}
        />
        <button onClick={handleClickButton}>Añadir una nueva frase</button>
      </form>
    </div>
  );
}

export default App;
