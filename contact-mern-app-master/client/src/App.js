import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { getContact } from './redux/actions/contactAction';
import NavBar from './components/NavBar';
import AddContact from './components/AddContact';


function App() {
  const contacts = useSelector(state => state.contactReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContact())
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={ <ContactList  contacts={contacts} />} ></Route>
          <Route path="/add" element={ <AddContact   />} ></Route>

        </Routes>
      </header>
    </div>
  );
}

export default App;
