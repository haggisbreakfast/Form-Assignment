import React from 'react';
// imports local reusable styled components
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
          <SelectHeader>please select one of the following:</SelectHeader>
          <ChoicesContainer>
            <Choice>
              <input type="radio" value="lorem" name="lorem ipsum" /> lorem
            </Choice>
            <Choice>
              <input type="radio" value="ipsum" name="lorem ipsum" /> ipsum
            </Choice>
            <Choice>
              <input type="radio" value="lorem ipsum" name="lorem ipsum" />{' '}
              lorem ipsum
            </Choice>
          </ChoicesContainer>
        </CheckboxContainer>
      </div>
    );
  }
}

export default RadioButtons;
