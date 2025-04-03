import './App.css';
import MenuBar from './common/MenuBar';
import Homepage from './Homepage/Homepage';

function App() {
  return (
    <div>
      <title>Bingo Generator</title>
      <MenuBar />
      <div className='flex justify-center items-center h-with-menubar'>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
