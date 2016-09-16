'use strict';

import test from 'ava';
import EventEmitter from '../src/event-emitter';

let emitter;

test.beforeEach(() => {
  emitter = new EventEmitter();
});

test.cb('#on should set event handler to the key', t => {
  const key = 'event-key';
  emitter.on(key, t.end);
  emitter.emit(key);
});

test.cb('#emit should pass data to the handlers', t => {
  const key = 'event-key';
  const passingData = {key: 'value'};
  emitter.on(key, data => {
    t.deepEqual(data, passingData);
    t.end();
  });
  emitter.emit(key, passingData);
});

test.cb('#off should unset event handler', t => {
  const key = 'event-key';
  const handler = () => {
    t.fail('should not called after off(key).');
  };
  emitter.on(key, handler);
  emitter.off(key, handler);
  emitter.emit(key);
  emitter.on(key, t.end);
  emitter.emit(key);
});
