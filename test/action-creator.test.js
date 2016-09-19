'use strict';

import test from 'ava';
import EventEmitter from '../src/event-emitter';
import ActionCreator from '../src/action-creator';

let dispatcher;
let action;

test.beforeEach(() => {
  dispatcher = new EventEmitter();
  action = new ActionCreator(dispatcher);
});

test.cb('#count should emit `count` event', t => {
  const expected = 8;
  dispatcher.on('count', count => {
    t.is(count, expected);
    t.end();
  });
  action.count(expected);
});
