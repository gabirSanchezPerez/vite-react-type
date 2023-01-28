import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Converter from './components/Converter';
import NoMatch from './components/NoMatch';

import Layout from './components/Layout';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/converter' element={<Converter />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
  )
}

export default App
