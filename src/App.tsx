import './App.css';
import WheelView from './Components/wheel/wheelView';
import InputForm from './Components/inputForm/inputFormView';

function App() {
  // temp hard coded data
  const dates: string[] = ['Big Sur', 'Camp Pendleton']
  return (
    <div className="App">
      <header>
        <h1>Wheel of dates!</h1>
      </header>
      <body className='body'>
        <WheelView />
        <InputForm inputs={dates}/>
      </body>
    </div>
  );
}

export default App;
