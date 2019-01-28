import React from 'react';
import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 20px;
`;

export const SelectHeader = styled.p``;

export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  width: 100%;
  justify-content: center;
`;

export const Choice = styled.div`
  display: flex;
  margin: 10px;
`;

class CheckboxButtons extends React.Component {
  select(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div onChange={this.select.bind(this)}>
        <CheckboxContainer>
          <SelectHeader>please pick all that apply:</SelectHeader>
          <ChoicesContainer>
            <Choice>
              <input type="checkbox" value="lorem" name="lorem ipsum" /> lorem
            </Choice>
            <Choice>
              <input type="checkbox" value="ipsum" name="lorem ipsum" /> ipsum
            </Choice>
            <Choice>
              <input type="checkbox" value="lorem ipsum" name="lorem ipsum" />{' '}
              lorem ipsum
            </Choice>
          </ChoicesContainer>
        </CheckboxContainer>
      </div>
    );
  }
}

export default CheckboxButtons;
