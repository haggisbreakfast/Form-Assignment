import React, { Component } from 'react';

class CheckboxButtons extends React.Component {
  select(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div onChange={this.select.bind(this)}>
        <input type="checkbox" value="pizza" name="fav food" /> Pizza
        <input type="checkbox" value="sushi" name="fav food" /> Sushi
        <input type="checkbox" value="sushi" name="fav food" /> Salad
      </div>
    );
  }
}

export default CheckboxButtons;
