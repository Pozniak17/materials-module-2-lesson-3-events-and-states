// деструктуризуємо {Components}, щоб кругом не писати class ColorPicker extends React.Component {}

import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = { activeOptionIdx: 0 };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    // const this.props.options[this.state.activeOptionIdx] // було, внизу стало після деструктуризації
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx]; //options[2]

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              // тут в onCLick в нас інлайн-функція, бо якщо не інлайн, то буде переданий результат на 9 рядку(буде undefined), а нам треба викликати інлайн, щоб через замикання в індекс потрапив індекс нашого {options.map(({ label, color }, index)
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

// const ColorPicker = ({ options }) => (
//   <div className="ColorPicker">
//     <h2 className="ColorPicker__title">Color Picker</h2>
//     <div>
//       {options.map(({ label, color }) => (
//         <span
//           key={label}
//           className="ColorPicker__option"
//           style={{ backgroundColor: color }}
//         ></span>
//       ))}
//     </div>
//   </div>
// );

// class ColorPicker extends Component {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//     const optionClasses = ['ColorPicker__option'];

//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }
//     return optionClasses.join(' ');
//   };

//   render() {
//     const { label } = options[this.state.activeOptionIdx];
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>Выбран цвет: {label} </p>

//         <div>
//           {options.map(({ label, color }, index) => {
//             return (
//               <button
//                 key={label}
//                 //* це для того щоб з пробілом зробити між класами title title-list
//                 className={this.makeOptionClassName(index)}
//                 style={{
//                   backgroundColor: color,
//                 }}
//                 onClick={() => this.setActiveIdx(index)}
//               ></button>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

export default ColorPicker;

//* Ми хочемо в нашому ColorPicker зберігати активну обрану поточну опцію, це динамічне значення, тому під неї треба створити state. state один, а в ньому скільки завгодно властивостей, декілька стейтів не буває, це один об'єкт, а в ньому безліч властивостей. Ств. state а в ньому значення activeOptionIdx, значенням якого буде індекс, бо ми працюємо з масивом. Як ми можемо дізнатися активну? - просто зберегти її індекс. І нехай це буде спочатку 0. Логіка така, коли ми працюємо з масивом, ми не зберігаємо ім'я, ще щось, ми зберігаємо саме індекс масива, тому що за індексом масива дуже просто буде зробити ось так [this.state.activeOptionIdx] і ми отримали посилання на цей елемент масива. Тому що colorPickerOptions це масив об'єктів. Якби ми зберігали якийся label нам би доводилося тинятися по всьому масиву, порівнювати властивіть label, а так ми вказали який індекс => нам поверне цей об'єкт повністью. Працюємо з індексами. Ми хочемо щоб активна кнопка в нас підсвічувалася якимось додатковим класом ( ColorPicker__option--active)
// Як дізнатися чи кнопка активна чи ні? В нас є this.state.activeOptionIdx і коли ми перебираємо map  options.map(({ label, color }) в нас є перший аргумент сам option деструктуризований { label, color }, а другий index при переборі options.map(({ label, color }, index)
// index ми вик. не для ключів, ми хочемо просто порівняти, те що в нас лежить в state і поточний індекс при переборі і border: '5px solid black' ось ці стилі треба застосувати, тільки якщо цей індекс options.map(({ label, color }, index) співпадає з тим що в state лежить activeOptionIdx: 0.
