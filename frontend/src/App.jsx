import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"
import Dashboard from "./Pages/Dashboard"
import SendMoney from "./Pages/SendMoney"
import "./App.css"
import PrivateRoute from "./components/auth/PrivateRoute"
import Settings from "./Pages/Settings"

function App() {

  return (

    <>
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/send"
          element={
            <PrivateRoute>
              <SendMoney />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App      