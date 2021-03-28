import {
  withJsonFormsLayoutProps,
  ResolvedJsonFormsDispatch,
} from '@jsonforms/react';
const VerticalLayoutRenderer = ({
  schema,
  uischema,
  path,
  renderers,
  cells,
  enabled,
  visible,
}) => {
  return (
    <div>
      {uischema.elements.map((child, index) => (
        <div key={index}>
          <ResolvedJsonFormsDispatch
            schema={schema}
            uischema={child}
            path={path}
            enabled={enabled}
            renderers={renderers}
            cells={cells}
          />
          <br />
        </div>
      ))}
    </div>
  );
};
export default withJsonFormsLayoutProps(VerticalLayoutRenderer);
