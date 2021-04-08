import firebaseApp from './firebase/fireConfig';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PageNotFound from './pages/404';
import Dashboard from './pages/dashboard/Dashboard';
import AppBar from './components/appbar/AppBar';
import AuthContext, { AuthProvider } from './auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        {/* footer here */}
      </Router>
    </AuthProvider>
  );
}

export default App;
