// деструктуризуємо {Components}, щоб кругом не писати class Dropdown extends React.Component {}
import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>

        {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;

// onMouseOver - це подія hover для React

// в JS подія mouseenter, а в React onMouseEnter
