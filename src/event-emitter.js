'use strict';

export default class EventEmitter {
  constructor() {
    this._handlersMap = {};
  }

  on(type, handler) {
    if (typeof this._handlersMap[type] === 'undefined') {
      this._handlersMap[type] = [];
    }

    this._handlersMap[type].push(handler);
  }

  emit(type, data) {
    const handlers = this._handlersMap[type] || [];
    handlers.forEach(handler => handler(data));
  }

  off(type, handler) {
    const handlers = this._handlersMap[type] || [];
    handlers.forEach((h, i) => {
      if (h === handler) {
        handlers.splice(i, 1);
      }
    });
  }
}
