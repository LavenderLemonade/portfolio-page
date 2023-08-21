import logo from './logo.svg';
import './App.css';
import Title from './Components/Title';
import Description from './Components/Description';
import List from './Components/List';

function App() {
  return (
    <div>
      <Title />
      <Description />
      <List
        items={['React', 'C#', 'Node']}
      />

      <List
        items={['<a href = "https://github.com/LavenderLemonade"> GitHub </a>', 'LinkedIn', 'Resume']}
      />
    </div>
  );
}

export default App;
