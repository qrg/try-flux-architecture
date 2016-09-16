'use strict';

export default class ActionCreator {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  countUp(data) {
    // "Emit" event ----> Store
    this.dispatcher.emit('countUp', data);
  }
}
