import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import Auth from "./Components/Auth/Auth";
import LearnerRegistration from "./Components/LearnerRegistration/LearnerRegistration";
import RiderRegistration from "./Components/RiderRegistration/RiderRegistration";
import initFirebase from "./Firebase/Firebase.init";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import ContextProvider from "./ContextProvider/ContextProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import Payment from "./Components/Payment/Payment";
import UserLogin from "./Components/UserLogin/UserLogin";
import PrivateUserRoute from "./PrivateUserRoute/PrivateUserRoute";

initFirebase();
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/admin-login' element={<AdminLogin />} />
            <Route path='/user-login' element={<UserLogin />} />
            <Route path='/rider-registration' element={<RiderRegistration />} />
            <Route
              path='/learner-registration'
              element={<LearnerRegistration />}
            />
            <Route
              path='/dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path='/user-dashboard'
              element={
                <PrivateUserRoute>
                  <UserDashboard />
                </PrivateUserRoute>
              }
            />
            <Route
              path='/user-dashboard/pay/:serviceId'
              element={
                <PrivateUserRoute>
                  <Payment />
                </PrivateUserRoute>
              }
            />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
