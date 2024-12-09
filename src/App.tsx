import ModalidadVirtual from './Pages/Virtual/ModalidadVirtual';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModalidadPresencial from './Pages/Presencial/ModalidadPresencial';
import NavBar from './Components/shared/NavBar';
function App() {
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<ModalidadPresencial />} />
          <Route path="/virtual" element={<ModalidadVirtual />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
