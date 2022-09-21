import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Housing from './containers/Housing/Housing';
import AboutUs from './containers/AboutUs/AboutUs';
import NotFound from './containers/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:housingId" element={<Housing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
