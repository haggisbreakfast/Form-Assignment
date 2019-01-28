import React from 'react';
import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 25%;
  padding: 10px 20px;
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
  border: 1px solid pink;
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
          <SelectHeader>Please pick all that apply</SelectHeader>
          <ChoicesContainer>
            <Choice>
              <input type="checkbox" value="lorem" name="lorem ipsum" /> Lorem
            </Choice>
            <Choice>
              <input type="checkbox" value="ipsum" name="lorem ipsum" /> Ipsum
            </Choice>
            <Choice>
              <input type="checkbox" value="lorem ipsum" name="lorem ipsum" />{' '}
              Lorem Ipsum
            </Choice>
          </ChoicesContainer>
        </CheckboxContainer>
      </div>
    );
  }
}

export default CheckboxButtons;
