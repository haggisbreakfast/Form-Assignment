import React from 'react';

class RadioButtons extends React.Component {
  select(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div onChange={this.select.bind(this)}>
        <input type="radio" value="pizza" name="fav food" /> Pizza
        <input type="radio" value="sushi" name="fav food" /> Sushi
      </div>
    );
  }
}

export default RadioButtons;
