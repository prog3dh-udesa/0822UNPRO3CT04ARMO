function App() {

  let miNombre = 'Brian'
  let deportistas = ['Messi', 'Maradona', 'Riquelme']
  let esDeportista = false
  

  let estudiantes = [
    {
      nombre: 'Kevin',
      edad:19
    },
    {
      nombre: 'Camila',
      edad:23
    },
    {
      nombre: 'Sergio',
      edad:17
    }
  ]

  let seGraduan = estudiantes.filter(estudiante => estudiante.edad > 18)

  return (
    <div>
      {
        esDeportista ?
        <ul>
          {deportistas.map(deportista => <li>Buenas tardes {deportista}</li>)}
        </ul>
        :
        <p>
          Buenas tardes {miNombre}
        </p>
      }
      <h2>
        Los estudiantes admitidos son:
      </h2>
      <ul>
        {seGraduan.map(elm => <li>{elm.nombre}</li>)}
      </ul>
    </div>
  );
}

export default App;