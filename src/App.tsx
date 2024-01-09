import './App.css';
import InputFormContainer from './Components/inputForm/inputFormContainer';
import WheelContainer from './Components/wheel/wheelContainers';
import { GlobalInputStateProvider } from './utils/globalStateProvider';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Wheel of trips!</h1>
      </header>
      <body className='body'>
        <GlobalInputStateProvider>
          <WheelContainer />
          <InputFormContainer />
        </GlobalInputStateProvider>
      </body>
    </div>
  );
}

export default App;
