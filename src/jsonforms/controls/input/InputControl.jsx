import React, { Fragment } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';

const InputControl = (props) => {
  const { handleChange, path, uischema } = props;
  return (
    <Fragment>
      {uischema.label && <label>{uischema.label}</label>}
      <input
        type='text'
        onChange={(event) => handleChange(path, event.target.value)}
      />
    </Fragment>
  );
};

export default withJsonFormsControlProps(InputControl);
