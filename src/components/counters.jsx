import React, { Component } from 'react';
import Counter from './counter';
import AddCounterCard from './addCountCard';

class Counters extends Component {

    render() {
        let index = 1;
        if(this.props.state.counters.length === 0){
            return(
                <AddCounterCard onAddCounter={this.props.onAddCounter} />
            );
        }
        else{
            return (
                <React.Fragment>
                {this.props.state.counters.map(counter =>
                    <Counter counter={counter} 
                    onIncrement={this.props.onIncrement} 
                    onDecrement={this.props.onDecrement} 
                    onReset={this.props.onReset} 
                    onDelete={this.props.onDelete} 
                    onChange={this.props.onChange}
                    onLikeDislike={this.props.onLikeDislike} 
                    index={index++}></Counter>
                )}
                <AddCounterCard onAddCounter={this.props.onAddCounter} />
                </React.Fragment>
            );
        }
        
    }
}

export default Counters;