
import './App.css';
import Title from './Components/Title';
import Description from './Components/Description';
import List from './Components/List';
import LinkList from './Components/LinkList';
import Header from './Components/Header';

function App() {
  return (
    <div class="container">
      <Header />
      <Description />
      <List
        items={['React', 'C#', 'Node']}
      />
      <LinkList />

    </div>
  );
}

export default App;
