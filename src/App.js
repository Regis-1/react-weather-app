import 'bootstrap/dist/css/bootstrap.min.css';

import MainWeatherWidget from './Components//MainWeatherWidget';

function App() {
  const mockData = [
    {id:1, desc:'Poznań'},
    {id:2, desc:'Warszawa'},
    {id:3, desc:'Opole'},
    {id:4, desc:'Wrocław'},
    {id:5, desc:'Zakopane'},
    {id:6, desc:'Inowrocław'}
  ]

  return (
    <div className="App">
      <MainWeatherWidget items={mockData} />
    </div>
  );
}

export default App;
