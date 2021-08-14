import React from 'react';
import './style.css';

class Task extends React.Component {
  render() {
    const { done, summary } = this.props;
    return (
      <li>
        <label>{done ? 'Done' : 'Pending'}</label>
        <label>{summary}</label>
      </li>
    );
  }
}

class Tasks extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map((task) => (
          <Task key={task.id} summary={task.summary} done={task.done} />
        ))}
      </ul>
    );
  }
}

export class GoalItem extends React.Component {
  state = {
    goalState: 'closed',
  };

  toggle = (event) => {
    event.preventDefault();
    this.setState((currentState) => {
      return {
        goalState: currentState.goalState === 'closed' ? 'opened' : 'closed',
      };
    });
  };

  render() {
    const { title, active, items } = this.props;
    return (
      <article className="goal-item" onClick={this.toggle}>
        <p>
          <label>{title}</label>
          <button>{active ? 'Active' : 'Inactive'}</button>
          <button>...</button>
        </p>
        <p className={this.state.goalState}>
          {items.length > 0 && <Tasks items={items} />}
        </p>
      </article>
    );
  }
}
