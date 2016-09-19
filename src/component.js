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
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
    this.countReset = this.countReset.bind(this);

    // <- Observe store's change
    store.on('CHANGE', () => {
      this._onChange();
    });
  }

  _onChange() {
    console.trace();
    this.setState({count: store.getCount()});
  }

  countUp() {
    action.count(this.state.count + 1);
  }

  countDown() {
    action.count(this.state.count - 1);
  }

  countReset() {
    action.count(0);
  }

  render() {
    return (
      <div className='counter'>
        <button onClick={this.countUp} className='button is-outlined is-primary is-medium'>
          Up
        </button>

        <button onClick={this.countDown} className='button is-outlined is-primary is-medium'>
          Down
        </button>

        <button onClick={this.countReset} className='button is-outlined is-danger is-medium'>
          Reset
        </button>
        <span className='tag is-primary is-large'>{this.state.count}</span>
      </div>
    );
  }
}
