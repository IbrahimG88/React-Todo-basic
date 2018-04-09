import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;



class ThisForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
        todo:'todo',
        todoList:[]};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        //this.setState({value: event.target.value});
        //this.setState({todo: event.target.todo});
        const target = event.target;
        const value = target.value;
        const name = target.name;

        //TODO understand the this.setState function
        this.setState({
      [name]: value
        });
    }



    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        alert("Created todo item" + this.state.todo);
       this.state.todoList.push(this.state.todo);
        alert(this.state.todoList);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name="value" type="text" value={this.state.value} onChange={this.handleInputChange}/>
                </label>
                <label>
                     Item:
                    <input name="todo" type="text" value={this.state.todo} onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value="Submit"/>

            </form>
        );
    }
}


ReactDOM.render(
    <ThisForm />,
    document.getElementById('root')
);
