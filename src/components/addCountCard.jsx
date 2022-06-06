import React, { Component } from 'react';
class AddCounterCard extends Component {

    render() {
        return (
            <div className="col-md-3 p-1">
                <div className="card text-center" onClick={() => { this.props.onAddCounter() }}>
                    <div className="card-body">
                        <h1 >+</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCounterCard;