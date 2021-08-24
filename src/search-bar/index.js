import React from 'react';
import './style.css';

const AddButton = () => {
  return (<button className="add-button">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="14.5" fill="white" stroke="#85977A"/>
      <path d="M15.4286 9V21" stroke="#1F6A94"/>
      <path d="M21.8569 14.9905L9 15" stroke="#1F6A94"/>
    </svg>
  </button>);
};

export class SearchBar extends React.Component {
  render() {
    return (
      <section>
        <fieldset>
          <input className="input-search" placeholder="search using labels" />
          <AddButton />
        </fieldset>
      </section>
    );
  }
}
