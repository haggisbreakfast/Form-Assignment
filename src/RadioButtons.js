import React from 'react';
import {
  SelectHeader,
  ChoicesContainer,
  CheckboxContainer,
} from './CheckboxButtons';

class RadioButtons extends React.Component {
  select(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div onChange={this.select.bind(this)}>
        <CheckboxContainer>
          <SelectHeader>Please select one of the following</SelectHeader>
          <ChoicesContainer>
            <input type="radio" value="lorem" name="lorem ipsum" /> Lorem
            <input type="radio" value="ipsum" name="lorem ipsum" /> Ipsum
          </ChoicesContainer>
        </CheckboxContainer>
      </div>
    );
  }
}

export default RadioButtons;
