import React from 'react';
import './style.css';
import { ReactComponent as Pending } from './assets/pending.svg';
import { ReactComponent as Done } from './assets/done.svg';
import { ReactComponent as CollapsedGoalButton } from './assets/button-collapsed-goal.svg';
import { ReactComponent as ExpandedGoalButton } from './assets/button-expanded-goal.svg';

const TaskStatus = ({ status, onClick }) => {
  return status === 'pending' ? (
    <Pending className="task-status" onClick={onClick} />
  ) : (
    <Done className="task-status" onClick={onClick} />
  );
};

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { status, summary, onToggleTaskStatus } = this.props;
    return (
      <li>
        {<TaskStatus status={status} onClick={onToggleTaskStatus} />}
        <label>{summary}</label>
      </li>
    );
  }
}

export class GoalItem extends React.Component {
  constructor(props) {
    super(props);
    this.collapsibleItem = React.createRef();
  }

  state = {
    itemState: 'collapsed',
  };

  toggle = (event) => {
    event.preventDefault();
    const element = this.collapsibleItem.current;

    const collapse = () => {
      const sectionHeight = element.scrollHeight;
      const elementTransition = element.style.transition;
      element.style.transition = '';
      requestAnimationFrame(() => {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;
        requestAnimationFrame(() => {
          element.style.height = 0 + 'px';
        });
      });
      this.setState({
        itemState: 'collapsed',
      });
    };

    const expand = () => {
      const sectionHeight = element.scrollHeight;
      element.style.height = sectionHeight + 'px';
      this.setState({
        itemState: 'expanded',
      });
    };

    this.state.itemState === 'collapsed' ? expand() : collapse();
  };

  render() {
    const { id, title, items, onToggleTaskStatus } = this.props;
    return (
      <article className="goal-item">
        <p onClick={this.toggle}>
          {this.state.itemState === 'collapsed' ? (
            <CollapsedGoalButton />
          ) : (
            <ExpandedGoalButton />
          )}
          <label>{title}</label>
        </p>
        <ul ref={this.collapsibleItem} className={`items`}>
          {items.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              summary={task.summary}
              status={task.status}
              onToggleTaskStatus={() => onToggleTaskStatus(id, task.id)}
            />
          ))}
        </ul>
      </article>
    );
  }
}
