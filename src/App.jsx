import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css'

function App() {

  const [linea1,setLinea1] = useState('');
  const [linea2,setLinea2] = useState('');
  const [imagen,setImagen] = useState('');


  const onChangeL1 = (evento) => {
    setLinea1(evento.target.value);
  }

  const onChangeL2 = (evento) => {
    setLinea2(evento.target.value);
  }

  const onChangeImagen = (evento) => {
    setImagen(evento.target.value);
  }

  const onClickBoton = (evento) =>{
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL('image.png');
      let link = document.createElement('a');

      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange = {onChangeImagen}>
        <option value = 'fire'>Casa en llamas</option>
        <option value = 'futurama'>Futurama</option>
        <option value = 'history'>History Channel</option>
        <option value = 'matrix'>Matrix</option>
        <option value = 'philosoraptor'>Philosoraptor</option>
        <option value = 'smart'>Smart Guy</option>
      </select> <br/>

      <input onChange = {onChangeL1} type = 'text' placeholder = 'Linea 1' /> <br/>
      <input onChange = {onChangeL2} type = 'text' placeholder = 'Linea 2'/> <br/>

      <button onClick = {onClickBoton}>Exportar</button>

      <div className = 'meme' id='meme'>
        <span>{linea1}</span> <br/>
        <span>{linea2}</span> 
        <img src={'/img/'+ imagen + '.jpg'} alt="img" />
      </div>
    </div>
  );
}

export default App;
