import { useState, useEffect } from 'react';
import { JsonForms } from '@jsonforms/react';
import schema from './schema.json';
import uischema from './uischema.json';
import inputControlTester from './jsonforms/controls/input/inputControlTester';
import VerticalLayoutTester from './jsonforms/layouts/vertical-layout-tester';
import VerticalLayoutRenderer from './jsonforms/layouts/vertical-layot-controller';
import InputControl from './jsonforms/controls/input/InputControl';
import ButtonControlTester from './jsonforms/controls/button/ButtonControlTester';
import ButtonControl from './jsonforms/controls/button/ButtonControl';

const renderers = [
  { tester: inputControlTester, renderer: InputControl },
  { tester: ButtonControlTester, renderer: ButtonControl },
  { tester: VerticalLayoutTester, renderer: VerticalLayoutRenderer },
];

const App = () => {
  const [jsonformsData, setJsonformsData] = useState({});

  useEffect(() => {}, [jsonformsData]);

  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={jsonformsData}
      renderers={renderers}
      onChange={({ errors, data }) => setJsonformsData(data)}
    />
  );
};

export default App;
