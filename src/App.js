import './App.css';
import { SearchBar } from './search-bar';
import { GoalList } from './goal-list';

function App() {
  return (
    <div className="main-content">
      <SearchBar />
      <GoalList />
    </div>
  );
}

export default App;
