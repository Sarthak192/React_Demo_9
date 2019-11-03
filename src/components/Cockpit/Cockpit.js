import React, {Component} from 'react';

import classes from './Cockpit.css';

class Cockpit extends Component{
  constructor(props){
    super(props)
    console.log("[Cockpit.js] constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[Cockpit.js] getDerivedStateFromProps', props);
    return null;
  }

  componentDidMount() {
    console.log('[Cockpit.js] componentDidMount');
  }

  render(){
  console.log("[Cockpit.js] rendering")
    const assignedClasses = [];
    let btnClass = '';
    if (this.props.showPersons) {
        btnClass = classes.Red;
    }

    if ( this.props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( this.props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{this.props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={this.props.clicked}>Toggle Persons</button>
        </div>
    );
}
}

export default Cockpit;