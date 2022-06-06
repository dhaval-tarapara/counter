import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';

class App extends Component {
    state = {
        id : 2,
        counters: [
            { id: 1, value: 0, name: "" ,isLiked : true }
            
        ],
        totCount: () => {
            const allCounts = [];
            for (let i = 0; i < this.state.counters.length; i++) {
                allCounts[i] = this.state.counters[i]["value"];
            }
            // console.log(allCounts);

            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            if (this.state.counters.length !== 0) {
                // console.log(this.state.counters);
                return (allCounts.reduce(reducer));
            }
            else{
                return 0;
            }
        }
    };
    doIncrement = (counter) => {
        // this.setState({ count: ++this.state.count });
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        ++counters[index].value;
        this.setState({ counters });
        this.state.totCount();
    }
    doDecrement = (counter) => {
        // this.setState({ count: --this.state.count });
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        --counters[index].value;
        this.setState({ counters });
        this.state.totCount();
    }
    doReset = (counter) => {
        // this.setState({ count: 0 });
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value = 0;
        this.setState({ counters });
        this.state.totCount();
    }
    doDelete = (counter) => {
        const counters = this.state.counters.filter(c => c.id !== counter.id)
        this.setState({ counters });
        this.state.totCount();

        
    }
    doChange = (textInput, counter) => {
        let name = textInput.current.value;
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].name = name;
        this.setState({ counters });
        // console.table(counters);
        // this.state.totCount();
        console.log(counters[index]);

    };
    addNewCounter = () => {
        const counters = [...this.state.counters];
        const newCounter = { id: this.state.id++, value: 0, name: "" ,isLiked : false};
        
        counters.push(newCounter);
        this.setState({counters});
        console.log(newCounter);

    };
    handleLikeDislike = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].isLiked = !counters[index].isLiked;
        this.setState({ counters });
        // this.state.totCount();
        console.log(counter);
    }


    render() {
        return (
            <div className="container">
                <div className="cntr">
                    

                        <h1 className="total-count text-secondary">Total Count : {this.state.totCount()}</h1>
                        
                    

                    <div className="row">
                        <Counters state={this.state}
                        onIncrement={this.doIncrement} 
                        onDecrement={this.doDecrement} 
                        onReset={this.doReset} 
                        onDelete={this.doDelete} 
                        onChange={this.doChange} 
                        onAddCounter={this.addNewCounter}
                        onLikeDislike={this.handleLikeDislike}    
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
