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
        completedTasks: 1,
        totalTasks: 10,
      },
      {
        id: 2,
        title: 'Introduction to Compilers',
        active: true,
        completedTasks: 5,
        totalTasks: 10,
      },
    ],
  };

  render() {
    return (
      <section className="goal-list">
        {this.state.items.map((item) => (
          <GoalItem
            key={item.id}
            title={item.title}
            active={item.active}
            completedTasks={item.completedTasks}
            totalTasks={item.totalTasks}
          />
        ))}
      </section>
    );
  }
}
