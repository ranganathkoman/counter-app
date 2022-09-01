import React, { Component } from "react";
import {eventTrack} from '../rudder/eventBuilder.js';
import {location} from '../rudder/locationBuilder';

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="">
            <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
              {this.props.counter.name}
            </span>
          </div>
          <div className="">
            <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="">
            <button
              className="btn btn-secondary"
              onClick={() => {
                const {id, name, value } = this.props.counter;
                if (location && location.latitude && location.longitude) {
                  eventTrack(`${name}_added_to_cart`, {category: name,
                    label: "Add",
                    product_id: id, 
                    value: value+1,
                    location: {
                      latitude: location.latitude,
                      longitude: location.longitude
                    }
                  });
                } else {
                  console.log("No position");
                }
                
                this.props.onIncrement(this.props.counter);
              }}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => {
                const {id, name, value } = this.props.counter;
                eventTrack(`${name}_removed_from_cart`, {category: name,
                  label: "Remove",
                  product_id: id, 
                  value: value - 1,
                });
                this.props.onDecrement(this.props.counter);
              }}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value;
  };
}

export default Counter;
