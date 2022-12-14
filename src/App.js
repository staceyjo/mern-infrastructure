import './App.css';
import { useState } from "react" // W11D2- 1
import AuthPage from './pages/AuthPage';
import { Routes, Route } from "react-router-dom"
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';

function App() {
  // when it is an array or object, put null
  const [user, setUser] = useState(null) // W11D2- 2
  return (
    <main className="App">
      {/* right now the user is true--if user is true, evaluate to true and insert new order page. when user is not true (no user logged in) go to auth page */}
      {
        user ?
        <>
        <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />}></Route>
            <Route path="/orders" element={<OrderHistoryPage />}></Route>
          </Routes>
          </>
          : 
          <AuthPage />
          
      }
    </main>
  );
}

export default App;
