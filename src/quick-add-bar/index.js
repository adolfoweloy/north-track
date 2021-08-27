import React from 'react';
import './style.css';
import { ReactComponent as AddButton } from './assets/button-add-goal.svg';

export class QuickAddBar extends React.Component {
  render() {
    return (
      <section>
        <fieldset>
          <input className="input-search" placeholder="Name your new goal" />
          <AddButton className="add-button" />
        </fieldset>
      </section>
    );
  }
}
