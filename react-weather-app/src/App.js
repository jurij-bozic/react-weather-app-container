import logo from './logo.svg';
import { WeatherWrapper } from './components/WeatherWrapper';
import './components/WeatherStyle.scss';

function App() {
  return (
    <div className="main-container" style={{ backgroundColor:  '#f0f0f0' }}>
      <WeatherWrapper></WeatherWrapper>
  </div>
  );
}

export default App;
