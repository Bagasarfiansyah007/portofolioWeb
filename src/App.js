import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Beranda from './Halaman/Beranda/Beranda';
import Cursor from './Komponen/cursor/cursor';
import {Scrollbar} from 'smooth-scrollbar-react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

        <BrowserRouter>
          <Cursor/>
           <Routes>
             <Route path="/" element={<Beranda />} />
           </Routes>
         </BrowserRouter>
     
  );
}

export default App;
