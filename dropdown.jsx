/* 

Prompt:
  We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage
  in the ExampleNav component. The Dropdown and DropdownItem components have some problems, and also 
  have room for improvements (doesn't everything?) A couple items TODO here (make sure to explain with comments!)
  
  0. How are you today? 😊
  1. Please fix any obvious issues and make you see with the dropdown.
  2. Please then make improvements to the dropdown and make it a but more React-y. Assume this was cobbled
     together or brought in hastily from StackOverflow.
  3. Given that this dropdown might form the basis of an Account picker, a searchable list of Product Tours, one
     step of a flow to configure alerting, etc... Please explore with text or code the way you would approach this.
  4. If we wanted to sync this dropdown selection to the server with
     httpPatch('user', { [`dropdown-state-${key}`]: {true,false} }) where would this be included OR how best to
     handle this (properties needing to be synced to the backend)?
  5. Anything else to add here?
  6. Unrelated to this, what is one new feature you would add to React?
  
  PS: No need to worry about CSS, actually making it "run" etc...

 */

import React, {PureComponent} from 'react';
import { httpPatch } from 'lib/http';

class Dropdown extends PureComponent {
  constuctor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const {isOpen} = this.state;

    this.setState({isOpen: isOpen});
  }

  render() {
    const {isOpen} = this.state;
    const {label} = this.props;

    return (
      <div className="dropdown">
        <button type="button" className="dropdown-button" id="dropdownButton" aria-haspopup="true" aria-expended={isOpen} onClick={this.toggle}>{label}</button>

        <ul className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu`} aria-labelledby="dropdownButton" role="menu">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class DropdownItem extends PureComponent {
  render() {
    // TODO implement me
    return <a href={this.props.href}>{this.props.children}</a>
  }
}

class ExampleNav extends PureComponent {
  render() {
    return (
      <nav>
        <a href="/page1">Page 1</a>
        <Dropdown label="More items">
          <DropdownItem href="/page2">Page 2</DropdownItem>
          <DropdownItem href="/page3">Page 3</DropdownItem>
          <DropdownItem href="/page4">Page 4</DropdownItem>
        </Dropdown>
        <Dropdown label="Even more items">
          <DropdownItem href="/page5">Page 5</DropdownItem>
          <DropdownItem href="/page9">Page 9</DropdownItem>
        </Dropdown>
      </nav>
    );
  }
}
