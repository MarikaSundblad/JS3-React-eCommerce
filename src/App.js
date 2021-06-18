import './App.css';
import { useEffect } from 'react';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { AdminRoute } from './routes/AdminRoute';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import { getUsers } from './store/actions/usersActions';
import { checkUser } from './store/actions/authActions';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Login from './views/Login';
import UserList from './views/UserList';
import AdminPage from './views/AdminPage';
import AddUser from './views/AddUser';
import EditUser from './views/EditUser';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser())
    dispatch(getUsers())
  }, [dispatch])

  const user = useSelector(state => state.auth.userToken)

  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/users" component={UserList} />
          <AdminRoute exact path="/admin" component={AdminPage} />
          <AdminRoute exact path="/add-user" component={AddUser} />
          <AdminRoute exact path="/admin/manage/:id" component={EditUser} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

