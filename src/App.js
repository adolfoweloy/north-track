import './App.css';
import { QuickAddBar } from './quick-add-bar';
import { GoalList } from './goal-list';

function App() {
  return (
    <div className="main-content">
      <QuickAddBar />
      <GoalList />
    </div>
  );
}

export default App;
