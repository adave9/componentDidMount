import React from 'react';
import './App.css';

class App extends React.Component{

    constructor(props)
    {
      super(props);
      this.state={favouritecolor:"red"}
    }

   componentDidMount(){
     setTimeout(() => {this.setState({favouritecolor:"yellow"})},2000)
   }
  render(){
    return <div>
                <p>
                    My favourite color is {this.state.favouritecolor}.
                </p>
            </div>;
  }
}

export default App;
