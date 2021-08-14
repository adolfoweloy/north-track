import React from 'react';
import './style.css';

export class GoalItem extends React.Component {
  render() {
    const { title, active, completedTasks, totalTasks } = this.props;
    return (
      <article className="goal-item">
        <label>{title}</label>
        <button>{active ? 'Active' : 'Inactive'}</button>
        <button>...</button>
      </article>
    );
  }
}
