import { isControl, rankWith } from '@jsonforms/core';

export default rankWith(
  3, //increase rank as needed
  isControl
);
