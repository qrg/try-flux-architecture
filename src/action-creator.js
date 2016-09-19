'use strict';

export default class ActionCreator {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  count(data) {
    // "Emit" event ----> Store
    this.dispatcher.emit('count', data);
  }

}
