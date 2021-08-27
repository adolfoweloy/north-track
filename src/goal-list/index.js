import React from 'react';
import { GoalItem } from './goal-item';
import './style.css';

export class GoalList extends React.Component {
  state = {
    items: [
      {
        id: 1,
        title: 'React Main Concepts',
        active: true,
        items: [
          {
            id: 1,
            summary: 'Render props',
            status: 'done',
          },
          {
            id: 2,
            summary: 'Forward ref',
            status: 'pending',
          },
        ],
      },
      {
        id: 2,
        title: 'Introduction to Compilers',
        active: true,
        items: [],
      },
    ],
  };

  toggleStatus = (status) => {
    return status === 'pending' ? 'done' : 'pending';
  };

  changeGoal = (goal, taskId) => ({
    ...goal,
    items: goal.items.map((task) =>
      task.id === taskId
        ? { ...task, status: this.toggleStatus(task.status) }
        : task
    ),
  });

  onToggleTaskStatus = (goalId, taskId) =>
    this.setState((currentState) => ({
      items: currentState.items.map((goal) =>
        goal.id === goalId ? this.changeGoal(goal, taskId) : goal
      ),
    }));

  render() {
    return (
      <section className="goal-list">
        {this.state.items.map((item) => (
          <GoalItem
            key={item.id}
            id={item.id}
            title={item.title}
            active={item.active}
            items={item.items}
            onToggleTaskStatus={this.onToggleTaskStatus}
          />
        ))}
      </section>
    );
  }
}
