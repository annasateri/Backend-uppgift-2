import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Navbar from './components/navigation/Navbar';
import TopNav from './components/navigation/TopNav';
import GetInTouch from './components/navigation/GetInTouch';
import Footer from './components/navigation/Footer';
import Home from './views/Home';
import Shop from './views/Shop';
import NewIn from './views/NewIn';
import AboutUs from './views/AboutUs';
import NotFound from './views/NotFound';
import ProductDetails from './views/ProductDetails';
import Cart from './views/Cart';
import Login from './views/Login';
import Register from './components/auth/Register';
import Order from './views/Order';
import Admin from './views/Admin';
import OrderDetails from './views/OrderDetails';
import UserDetails from './views/UserDetails';
import OrderCompleted from './views/OrderCompleted';
import UserDeleted from './components/admin/UserDeleted';
import { check } from './store/actions/userActions';
import CreateProduct from './views/CreateProduct';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check())
  })

  return (
    <BrowserRouter>
      <TopNav />
      <Navbar />
      <div className="container">
        <Switch>

          <Route exact path="/" component={Home} />
          
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/newin" component={NewIn} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/createproduct" component={CreateProduct} />
          <Route exact path="/productdetails/:id" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/orderdetails/:id" component={OrderDetails} />
          <Route exact path="/userdetails/:id" component={UserDetails} />
          <Route exact path="/ordercompleted" component={OrderCompleted} />
          <Route exact path="/userdeleted" component={UserDeleted} />

  
          <Route path="*" component={NotFound} />

 
        </Switch>

      </div>
      <GetInTouch />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
