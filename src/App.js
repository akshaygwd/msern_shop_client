import React, {useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/navbar';
import ShoppingList from './components/shoppingList';
import { Provider } from 'react-redux';
import store from './store';
import PopupModal from './components/popupModal';
import { Container } from 'reactstrap';
import { loadUser } from './actions/authAction';



function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store} >
      <div className="App">
        <NavigationBar />
        <Container>
          <PopupModal />
        </Container>
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
