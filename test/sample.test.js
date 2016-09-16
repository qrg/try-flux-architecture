'use strict';

import test from 'ava';
import sample from '../src/sample';

test('returns string "sample"', t => {
  t.is(sample(), 'sample');
});
