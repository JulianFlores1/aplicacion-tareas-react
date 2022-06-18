import './App.css';
import ListaDetareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal'>
          <h1>MIS TAREAS</h1>
          <ListaDetareas/>
      </div>
    </div>
  );
}

export default App;
