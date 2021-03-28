import { uiTypeIs, rankWith } from '@jsonforms/core';

export default rankWith(
  4, //increase rank as needed
  uiTypeIs("Button")
);
