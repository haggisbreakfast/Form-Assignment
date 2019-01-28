import React from 'react';
import {
  SelectHeader,
  ChoicesContainer,
  CheckboxContainer,
  Choice,
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
            <Choice>
              <input type="radio" value="lorem" name="lorem ipsum" /> Lorem
            </Choice>
            <Choice>
              <input type="radio" value="ipsum" name="lorem ipsum" /> Ipsum
            </Choice>
            <Choice>
              <input type="radio" value="lorem ipsum" name="lorem ipsum" />{' '}
              Lorem Ipsum
            </Choice>
          </ChoicesContainer>
        </CheckboxContainer>
      </div>
    );
  }
}

export default RadioButtons;
