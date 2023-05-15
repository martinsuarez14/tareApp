import React from 'react'
import '../hojas-de-estilo/Tarea.css';

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <i className="bi bi-x-circle tarea-icono"></i>
      </div>
    </div>
  )
}

export default Tarea;