// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import { AuthProvider, useAuth } from "./contexts/AuthContext.jsx";
import Medicines from "./components/dashboard/Medicines.jsx";
import ShopSearch from "./components/dashboard/ShopSearch.jsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={<div className="text-white text-center py-8">Welcome to Rare Medicine Locator</div>}
          />
          <Route path="medicines" element={<Medicines />} />
          <Route path="shops" element={<ShopSearch />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;

// Simple wrapper to protect routes
function PrivateRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
}


