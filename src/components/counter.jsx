import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

    }


    textInput = React.createRef();
    render() {
        return (

            <div className={`col-sm-6 col-md-4 p-1 `}>
                <div className="card text-center"
                // style={{ width: '18rem' }}
                >
                    <div className={`card-body ${this.props.counter.isLiked ? "bg-ddd" : ""}`}>
                        <div className="row  mx-auto no-gutters">
                            <h6 className="col-3">#{this.props.index}</h6>
                            <div className="col"></div>

                            {/* <i className="fa fa-heart-o col-3"></i> */}
                            <i className={`fa fa-${this.props.counter.isLiked ? "heart" : "heart-o"} col-3`} onClick={() => { this.props.onLikeDislike(this.props.counter) }}></i>
                        </div>
                        <input className="form-control form-control-lg" type="text" onChange={() => { this.props.onChange(this.textInput, this.props.counter) }} ref={this.textInput} value={this.props.counter.name} />


                        <h2 className="count fs-1">{this.props.counter.value}</h2>

                        <div class={`btn-group ${this.props.counter.isLiked ? "bg-white" : ""}`} role="group" aria-label="Basic outlined example" >
                            <button type="button" class="btn btn-outline-primary fw-900 px-3 " onClick={() => { this.props.onIncrement(this.props.counter) }}>+</button>
                            <button type="button" class="btn btn-outline-primary fw-900 px-3 " onClick={() => { this.props.onDecrement(this.props.counter) }} disabled={this.props.counter.value === 0 ? "disabled" : ""}>-</button>
                            <button type="button" class="btn btn-outline-primary fw-900 px-3 " onClick={() => { this.props.onReset(this.props.counter) }}><i className="fa fa-refresh" ></i></button>
                            <button type="button" class="btn btn-outline-primary fw-900 px-3 " onClick={() => { this.props.onDelete(this.props.counter) }}><i className="fa fa-trash" ></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;