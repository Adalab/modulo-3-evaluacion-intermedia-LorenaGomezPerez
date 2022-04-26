
import '../styles/App.scss';
import originalData from '../data/characters.json';
import { useState } from 'react';

function App() {

  const [data, setdata] = useState(originalData);
  const [newList, setNewList] = useState("");

  const html = data.map((dataCharacter, index) =>
  <li key={index}>
    <p>{dataCharacter.quote}</p>
    <p>{dataCharacter.character}</p>
    </li>
  );

  const handleNewList = (ev) => {
    setNewList(ev.target.value);
    
  }

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

  
  return (
    <div >
      <header>
        <h1>Frases de friends</h1>
        <nav>
          <label htmlFor="">Filtrar por frases</label>
          <input type="text" />
          <label htmlFor="">Filtrar por personajes</label>
          <input type="" placeholder='Todos'></input>
        </nav>
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
