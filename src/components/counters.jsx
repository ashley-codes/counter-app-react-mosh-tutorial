import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* Another reference to the props that are pass from App */}
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            // bubbling up the event to the Parent App via inclusion of the props references to each of these events in App
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          >
            {/* <h4>Counter # {counter.id}</h4> */}
            {/* The handleDelete method is passed as a "props" so it can be access by the Counter component. */}
            {/* The key attribute is used internally by React - so we won't be able to access it in our component - thus the additional id prop */}
            {/* instead of passing the value and id properties - we can use the counter object itself */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
