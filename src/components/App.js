
import '../styles/App.scss';
import originalData from '../data/characters.json';
import { useState } from 'react';

function App() {

  //Variables de estado

  const [data, setdata] = useState(originalData);
  const [newList, setNewList] = useState("");
  const [dataFilter, setDataFilter] = useState("");
  const [dataCharacter, setDataCharacter] = useState("");

  //Hago map para recorrer el array y lo pinte

  const html = data
  .filter((quoteFilter)=>
  quoteFilter.quote.toLowerCase().includes(dataFilter.toLowerCase()))
  .filter((characterFilter)=>
  characterFilter.character.includes(dataCharacter))
  .map((dataCharacter, index) =>
  <li key={index}>
    <p>{dataCharacter.quote}</p>
    <p>{dataCharacter.character}</p>
    </li>
  );


  //Función manejadora para añadir nueva frase

  const handleNewList = (ev) => {
    setNewList(ev.target.value);
    
  }

  //Función manejadora del botón

  const handleClickButton = () => {

    const newPhrase = {
      quote: newList,
      character: newList
    }
    const newListData = [...data,newPhrase]
    setdata(newListData);
    setNewList({
      quote: '' ,
      character: ''
      
    });
}

//función para controlar el formulario

const handleForm = (ev) => {
  ev.preventDefault();
}

//función manejadora para controlar el filtrado por frase

const handleFilterData = (ev) => {

  setDataFilter(ev.target.value);

}

//función manejadora para controlar el filtrado por personaje

const handleFilterCharacter = (ev) => {

  setDataCharacter(ev.target.value);

}



  
  return (
    <div >
      <header>
        <h1>Frases de friends</h1>
        <form onSubmit={handleForm}>
          <label htmlFor="listPhrase">Filtrar por frases</label>
          <input type="text" value={dataFilter} onChange={handleFilterData}/>
          <label htmlFor="list">Filtrar por personajes</label>
          <select
            name="list"
            id="list"
            value={dataCharacter}
            onChange={handleFilterCharacter}>
            <option>Todos</option>
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
        <ul>
          {html}
        </ul> 
      </main>

      <div>
        <h2>Añadir una nueva frase</h2>
        <label htmlFor="phrase">Frase</label>
        <input type="text" name="phrase" id="phrase" value={newList.quote} onChange={handleNewList}/> 
        <label htmlFor="friends">Personaje</label> 
        <input type="text" name="friends" id="friends" value={newList.character} onChange={handleNewList}/>
        <button onClick={handleClickButton}>Añadir una nueva frase</button>
      </div>
      
    </div>
  
  );
  
}

export default App;
