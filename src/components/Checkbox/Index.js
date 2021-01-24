import React, { useState } from 'react';
import Checkmark from '../../assets/icons/checkmark.svg';
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
} from './Styled';

function Checkbox({ children, ...props }) {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <>
      <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
        <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
        <StyledCheckbox checked={checked}>
          <img src={Checkmark} alt="Checkmark" />
        </StyledCheckbox>
        <Text checked={checked}>{children}</Text>
      </CheckboxContainer>
    </>
  );
}

export default Checkbox;
