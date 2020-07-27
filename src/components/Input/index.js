import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { InputStyled, Span } from './styles';

function Input({ name, placeholder, type }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <InputStyled
        ref={inputRef}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        isErrored={!!error}
      />
      {error && <Span>{error}</Span>}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
