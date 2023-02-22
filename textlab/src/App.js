
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container my-3'>
        <TextForm heading="Enter the text to Analyze" />
        <About/>
      </div>
    </div>
  );
}

export default App;
