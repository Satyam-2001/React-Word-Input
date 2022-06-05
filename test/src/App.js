import './App.css';
import { WordInput } from 'react-word-input';

function App() {

  const print = (word) => {
    console.log(word);
  }

  return (
    <div className="App">
      <h1>REACT WORD INPUT</h1>
      <WordInput className='word' value={'W_R_ __P_T'} onChange={print} autoFocus />
      <p className='footer'>Developed By <a target='_blank' href='https://github.com/Satyam-2001'>Satyam Lohiya</a></p>
    </div>
  );
}

export default App;
