
import './App.css';
import TextForm from './TextForm';
import Navbar from './Navbar';

function App() {
  return (
    <>

  <Navbar title="this is nav"/>
  <div className = "container my-3">
<TextForm heading="enter your text here"/>
</div>
    </>
  );
}

export default App;
