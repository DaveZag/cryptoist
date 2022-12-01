import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';

import Header from './Components/Header';
import Details from './Pages/Details';
import Home from './Pages/Home';
import NoMatch from './Pages/noMatch';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:coinId" element={<Details />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
