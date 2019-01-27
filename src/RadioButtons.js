import React from 'react';
import { SelectHeader, ChoicesContainer } from './CheckboxButtons';
import styled from 'styled-components';

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class RadioButtons extends React.Component {
  select(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div onChange={this.select.bind(this)}>
        <RadioContainer>
          <SelectHeader>Please select one of the following</SelectHeader>
          <ChoicesContainer>
            <input type="radio" value="lorem" name="lorem ipsum" /> Lorem
            <input type="radio" value="ipsum" name="lorem ipsum" /> Ipsum
          </ChoicesContainer>
        </RadioContainer>
      </div>
    );
  }
}

export default RadioButtons;
