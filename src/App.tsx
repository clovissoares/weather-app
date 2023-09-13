import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Details from './Details';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='details'>
          <Route index element={<Details />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};