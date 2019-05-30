// Again import React to use it but this time we have to destructure it and get to the "Component" key
import React, {Component} from 'react';
// we can also import code we built into these components
import myFirstComponent from './MyFirstComponent'

// Notice here we use that "extends" word on the "Component" we imported?
class MyFirstClassComponent extends Component {
  // All Classes must have a "constructor", in React we always pass "props"
  constructor(props) {
    // Remember that if we "extend" a "class" of a "class" we have to call the "super()" method. Just pass it "props" as well.
    super(props);
    // class-based Components allow us to have "state"! And this is why we use class-based components.
    this.state = {
      text: '',
      todos: [],
      isClicked: false
    };

    // class-based components also allow us to have methods attached to our components
    onChange = e => {
      this.setState({
        text: e.target.value
      })
    }

    // class-based components must have the "render()" method in them for React to call them and they must be immediately invoked, an IIFE
    render() {
      // and the "render()" method must have a return
      return (
        <div>
          <h1>Input Text Below</h1>
          <input value={this.state.text} onChange={this.onChange}/>
          {/* we can make comment in JSX like this, with curlies outside our comment tokens*/}
          {/* we can invoke myFirstComponent here to use it in this component and pass it information via "props"*/}
          <myFirstComponent wasClicked={this.state.isClicked} />
        </div>
      )
    }
  }

export default MyFirstClassComponent
