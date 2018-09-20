import { Component } from 'react';
import { mockComponent } from '../utils/testUtils';

export class Table extends Component {
  render() {
    return mockComponent('Antd Table', this.props);
  }
}

class Search extends Component {
  render() {
    return mockComponent('Antd Search', this.props);
  }
}

export const Input = { Search };

export class Spin extends Component {
  render() {
    return mockComponent('Antd Spin', this.props);
  }
}

export class Card extends Component {
  render() {
    return mockComponent('Antd Card', this.props);
  }
}

class ButtonGroup extends Component {
  render() {
    return mockComponent('ButtonGroup', this.props);
  }
}

export class Button extends Component {
  render() {
    return mockComponent('Button', this.props);
  }
}

Button.Group = ButtonGroup;

export class Tooltip extends Component {
  render() {
    return mockComponent('Tooltip', this.props);
  }
}

export class Icon extends Component {
  render() {
    return mockComponent('Icon', this.props);
  }
}

class ListItem extends Component {
  render() {
    return mockComponent('ListItem', this.props);
  }
}

export class List extends Component {
  render() {
    return mockComponent('List', this.props);
  }
}

List.Item = ListItem;
