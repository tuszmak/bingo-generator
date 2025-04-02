import './App.css';
import MenuBar from './common/MenuBar';
import Homepage from './Homepage/Homepage';

function App() {
  return (
    <div>
      <MenuBar />
      <div className='flex justify-center items-center h-with-menubar'>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
