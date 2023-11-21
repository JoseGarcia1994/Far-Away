import ConfirmDeleteModal from './components/ConfirmDeleteModal.jsx';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList.jsx';
import Status from './components/Status.jsx';
import { useState } from 'react';
import "./App.css";

const App = () => {

  const [items, setItems] = useState([]);
  const [clearModal, setClearModal] = useState(false);

  // Save new item when form is submitted
  const addItems = item => {
    setItems((items) => [...items, item])
  }

  // Delete item
  const deleteItem = id => {
    setItems(items => items.filter(item => item.id !== id))
  }

  // Update item
  const updateItem = id => {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item)
    )
  }

  // Empty entire list
  const emptyList = () => {
    setClearModal(true)
  }

  return (
    <div className="app">
      <Logo />
      <Form  addItems={addItems}/>
      <PackingList items={items} deleteItem={deleteItem} updateItem={updateItem} emptyList={emptyList}/>
      <Status items={items}/>
      {clearModal && <ConfirmDeleteModal setItems={setItems} setClearModal={setClearModal}/>}
    </div>
  );
};

export default App;