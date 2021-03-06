import React, { Component } from 'react';
import styles from './dropdown.style.less';


type Props = {
  onClick: Function,
  menuItems: Array<any>
};

type State = {
  selection: Object,
  menuClassList: Array<string>,
  caretClassList: Array<string>
};

export default class DropdownView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selection: {
        text: 'Select',
        value: undefined
      },
      menuClassList: [
        'dropdown-content',
        'hide'
      ],
      caretClassList: [
        'dropdown-toggle-caret-container'
      ]
    };
  }

  toggleDropdown(): void {
    let newMenuContentClassList = [...this.state.menuClassList];
    let newCaretClassList = [...this.state.caretClassList];

    if (newMenuContentClassList.pop() === 'show') {
      newMenuContentClassList.push('hide');
      newCaretClassList.pop();
    } else {
      newMenuContentClassList.push('show');
      newCaretClassList.push('flip');
    }

    this.setState({
      menuClassList: newMenuContentClassList,
      caretClassList: newCaretClassList
    });
  }

  choiceSelected(event: SyntheticEvent<HTMLButtonElement>): void {
    const selectedIndex = parseInt(event.currentTarget.getAttribute('itemindex'));
    this.props.onClick(selectedIndex);
    this.setState({ selection: this.props.menuItems[selectedIndex] });
    this.toggleDropdown();
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

  componentWillUpdate(nextProps: Props) {
    if (nextProps.menuItems.length && this.state.selection.text === 'Select' && typeof nextProps.menuItems[0].value === 'undefined') {
      this.setState({
        selection: {
          text: nextProps.menuItems[0].text,
          value: nextProps.menuItems[0].value
        }
      });
    }
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
          <div className = "dropdown-toggle-text">
            {this.state.selection.text}
          </div>
          <div className = "dropdown-toggle-caret">
            <div className = {this.state.caretClassList.join(' ')}>
              <i className = "fas fa-caret-down"></i>
            </div>
          </div>
        </button>

        <ul className = {this.state.menuClassList.join(' ')}>
          {this.renderMenuItems()}
        </ul>
      </div>
    );
  }
}