import freeCodeCampLogo from './images/freecodecamp-logo.png'
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='free-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          cassName='free-logo'
          alt='Logo de FreeCodeCamp'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
