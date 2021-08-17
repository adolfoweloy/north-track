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
            done: true,
          },
          {
            id: 2,
            summary: 'Forward ref',
            done: false,
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

  render() {
    return (
      <section className="goal-list">
        {this.state.items.map((item) => (
          <GoalItem
            key={item.id}
            title={item.title}
            active={item.active}
            items={item.items}
          />
        ))}
      </section>
    );
  }
}
