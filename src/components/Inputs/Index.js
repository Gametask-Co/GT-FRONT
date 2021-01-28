import React, { useState } from 'react';
import Checkmark from '../../assets/icons/checkmark.svg';
import * as Styled from './Styled';

export const Text = ({ children, name, ...props }) => {
  return (
    <>
      <Styled.Label htmlFor={name}>{children}</Styled.Label>
      <Styled.Input type="text" name={name} id={name} {...props} />
    </>
  );
};

export const Email = ({ children, name, ...props }) => {
  return (
    <>
      <Styled.Label htmlFor={name}>{children}</Styled.Label>
      <Styled.Input type="email" name={name} id={name} {...props} />
    </>
  );
};

export const Password = ({ children, name, ...props }) => {
  return (
    <>
      <Styled.Label htmlFor={name}>{children}</Styled.Label>
      <Styled.Input type="password" name={name} id={name} {...props} />
    </>
  );
};

export const Date = ({ children, name, ...props }) => {
  return (
    <>
      <Styled.Label htmlFor={name}>{children}</Styled.Label>
      <Styled.Date type="date" name={name} id={name} {...props} />
    </>
  );
};

export const Select = ({ children, label, name, ...props }) => {
  return (
    <>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Select name={name} {...props}>
        {children}
      </Styled.Select>
    </>
  );
};

export const RadioGroup = ({ children, ...props }) => {
  return <Styled.RadioGroup {...props}>{children}</Styled.RadioGroup>;
};

export const Checkbox = ({ children, ...props }) => {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <>
      <Styled.CheckboxContainer
        checked={checked}
        onClick={handleCheckboxChange}
      >
        <Styled.HiddenCheckbox
          checked={checked}
          onChange={handleCheckboxChange}
          {...props}
        />
        <Styled.StyledCheckbox checked={checked}>
          <img src={Checkmark} alt="Checkmark" />
        </Styled.StyledCheckbox>
        <Styled.CheckboxLabel checked={checked}>
          {children}
        </Styled.CheckboxLabel>
      </Styled.CheckboxContainer>
    </>
  );
};
