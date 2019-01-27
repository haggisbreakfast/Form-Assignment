import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectHeader = styled.p``;

export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class CheckboxButtons extends React.Component {
  select(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div onChange={this.select.bind(this)}>
        <CheckboxContainer>
          <SelectHeader>Please pick all that apply</SelectHeader>
          <ChoicesContainer>
            <input type="checkbox" value="lorem" name="lorem ipsum" /> Lorem
            <input type="checkbox" value="ipsum" name="lorem ipsum" /> Ipsum
            <input
              type="checkbox"
              value="lorem ipsum"
              name="lorem ipsum"
            />{' '}
            Lorem Ipsum
          </ChoicesContainer>
        </CheckboxContainer>
      </div>
    );
  }
}

export default CheckboxButtons;
