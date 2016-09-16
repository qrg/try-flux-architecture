'use strict';

import React from 'react';
import ActionCreator from './action-creator';
import Store from './store';
import EventEmitter from './event-emitter';

const dispatcher = new EventEmitter();
const action = new ActionCreator(dispatcher);
const store = new Store(dispatcher);

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: store.getCount()};
    this.tick = this.tick.bind(this);

    // <- Observe store's change
    store.on('CHANGE', () => {
      this._onChange();
    });
  }

  _onChange() {
    console.trace();
    this.setState({count: store.getCount()});
  }

  tick() {
    action.countUp(this.state.count + 1);
  }

  render() {
    return (
      <div className='counter'>
        <button onClick={this.tick} className='button is-outlined is-primary is-medium'>
          Count Up
        </button>
        <span className='tag is-primary is-large'>{this.state.count}</span>
      </div>
    );
  }
}
