import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Home/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
    // <div className="App">
    //   <AuthProvider>
    //     <Router>
    //       <Header />
    //       <Routes>
    //         <Route exact path="/" element={<Home />} />
    //         <Route path="/home" element={<Home />} />
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/booking/:serviceId" element={<PrivateRoute />} />
    //         <Route path="*" element={<NotFound />} />
    //       </Routes>
    //     </Router>
    //   </AuthProvider>
    // </div>
  );
}

export default App;
