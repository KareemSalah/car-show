import React, { Component } from 'react';
import styles from './dropdown.style.less';


type Props = {
  onClick: Function,
  menuItems: Array<any>
};

type State = {
  selection: Object,
  classList: Array<string>,
  shouldUpdate: boolean
};

export default class DropdownView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selection: {
        text: 'Select a filter',
        value: undefined
      },
      classList: [
        'dropdown-content',
        'hide'
      ],
      shouldUpdate: true
    };
  }

  toggleDropdown(newSelection?: Object): void {
    let newClass = '';

    if (this.state.classList.pop() === 'show') {
      newClass = 'hide';
    } else {
      newClass = 'show';
    }

    if (newSelection && newSelection.value) {
      this.setState({
        classList: [...this.state.classList, newClass],
        selection: newSelection,
        shouldUpdate: this.state.selection.value !== newSelection.value
      });
    } else {
      this.setState({
        classList: [...this.state.classList, newClass],
        shouldUpdate: true
      });
    }
  }

  choiceSelected(event: SyntheticEvent<HTMLButtonElement>): void {
    const selectedIndex = parseInt(event.currentTarget.getAttribute('itemindex'));
    this.props.onClick(selectedIndex);
    this.toggleDropdown(this.props.menuItems[selectedIndex]);
  }

  renderMenuItems(): Array<any> {
    let items: Array<any> = [];
    const controller = this;

    this.props.menuItems.forEach((item, idx) => {
      items.push(
        <li className = "dropdown-item" key = {idx}>
          <button className = "dropdown-item-btn" key = {idx} itemindex = {idx} onClick = {this.choiceSelected.bind(this)}>
            {item.text}
          </button>
        </li>
      );
    });

    return items;
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return nextState.shouldUpdate;
  }

  render() {
    if (!this.props.menuItems || !this.props.onClick) {
      return (
        <div>
          <h3>No items to show!</h3>
        </div>
      );
    }

    return (
      <div className = "dropdown-container">
        <button onClick = {this.toggleDropdown.bind(this)} className = "dropdown-toggle">
          {this.state.selection.text}
        </button>

        <ul className = {this.state.classList.join(' ')}>
          {this.renderMenuItems()}
        </ul>
      </div>
    );
  }
}