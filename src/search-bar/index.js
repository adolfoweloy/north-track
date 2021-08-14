import React from 'react';
import './style.css';

export class SearchBar extends React.Component {
  render() {
    return (
      <section>
        <fieldset>
          <input className="input-search" placeholder="search using labels" />
          <span>
            <input id="searchActive" type="checkbox" />
            <label htmlFor="searchActive">Active</label>
          </span>
          <button className="add-button" title="Adds a new goal">
            +
          </button>
        </fieldset>
      </section>
    );
  }
}
