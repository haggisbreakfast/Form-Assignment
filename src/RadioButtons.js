import React from 'react';
import { SelectHeader, ChoicesContainer } from './CheckboxButtons';
import FieldContainer from './App';

// const FieldContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 10px;
// `;

class RadioButtons extends React.Component {
  select(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div onChange={this.select.bind(this)}>
        <FieldContainer>
          <SelectHeader>Please select one of the following</SelectHeader>
          <ChoicesContainer>
            <input type="radio" value="lorem" name="lorem ipsum" /> Lorem
            <input type="radio" value="ipsum" name="lorem ipsum" /> Ipsum
          </ChoicesContainer>
        </FieldContainer>
      </div>
    );
  }
}

export default RadioButtons;
