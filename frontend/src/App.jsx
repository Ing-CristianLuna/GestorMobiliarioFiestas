import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navar } from './componentes/Navar';
import { LocalPage } from './pages/LocalPage';
import { EmpleadoPage } from './pages/EmpleadoPage';
import { ContratoPage } from './pages/ContratoPage';
import { ClientePage } from './pages/ClientePage';
import { ProductoPage } from './pages/ProductoPage';
import { InventarioPage } from './pages/InventarioPage';
import { DetallesContratoPage } from './pages/DetallesContratoPage';
import { ChatBotPage } from './pages/ChatBotPage';
import { RegisterUserPage } from './pages/RegisterUserPage';
import { LoginPage } from './pages/LoginPage';


function App() {

  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/loginUser" />;
  }

  return (

    <BrowserRouter>
      <Navar />

      <Routes>
        <Route path='/local' element={<PrivateRoute><LocalPage /></PrivateRoute>} />
        <Route path='/empleado' element={<PrivateRoute><EmpleadoPage /></PrivateRoute>} />
        <Route path='/contrato' element={<PrivateRoute><ContratoPage /></PrivateRoute>} />
        <Route path='/cliente' element={<PrivateRoute><ClientePage /></PrivateRoute>} />
        <Route path="/producto" element={<PrivateRoute><ProductoPage /></PrivateRoute>} />
        <Route path='/inventario' element={<PrivateRoute><InventarioPage /></PrivateRoute>} />
        <Route path='/detallesContrato/:id' element={<PrivateRoute><DetallesContratoPage /></PrivateRoute>} />
        <Route path='/chatbot' element={<PrivateRoute><ChatBotPage /></PrivateRoute>} />
        <Route path='/registerUser' element={< RegisterUserPage />} />
        <Route path='/loginUser' element={< LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

