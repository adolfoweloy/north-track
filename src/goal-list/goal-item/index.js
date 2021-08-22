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

export class GoalItem extends React.Component {
  constructor(props) {
    super(props);
    this.collapsibleItem = React.createRef();
  }

  state = {
    itemState: 'collapsed',
  };

  onClickActiveButton = (event) => {
    event.stopPropagation();
  };

  onClickOptions = (event) => {
    event.stopPropagation();
  }

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
    const { title, active, items } = this.props;
    return (
      <article className="goal-item">
        <p onClick={this.toggle}>
          <label>{title}</label>
          <button onClick={this.onClickActiveButton}>{active ? 'Active' : 'Inactive'}</button>
          <button onClick={this.onClickOptions}>...</button>
        </p>
        <ul ref={this.collapsibleItem} className={`items`}>
          {items.map((task) => (
            <Task key={task.id} summary={task.summary} done={task.done} />
          ))}
        </ul>
      </article>
    );
  }

}
