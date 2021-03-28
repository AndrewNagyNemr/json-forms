import { withJsonFormsControlProps } from '@jsonforms/react';

const ButtonControl = (props) => {
  const { data, uischema } = props;
  return (
    <button type='button' onClick={() => console.log(data)}>
      {uischema.label}
    </button>
  );
};

export default withJsonFormsControlProps(ButtonControl);
