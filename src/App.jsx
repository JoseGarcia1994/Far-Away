import "./App.css";
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList.jsx';
import Status from './components/Status.jsx';

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Status />
    </div>
  );
};

export default App;