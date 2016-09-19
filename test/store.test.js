'use strict';

import test from 'ava';
import EventEmitter from '../src/event-emitter';
import Store from '../src/store';

let dispatcher;
let store;

test.beforeEach(() => {
  dispatcher = new EventEmitter();
  store = new Store(dispatcher);
});

test.cb('#onCount should emit `CHANGE` event', t => {
  const expected = 8;
  store.on('CHANGE', t.end);
  dispatcher.emit('count', expected);
});
