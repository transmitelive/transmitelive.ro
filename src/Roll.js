import React, { Component } from 'react';

class Roll extends Component {
  state = {
    interval: null,
    timeout: null,
    currentElement: this.props.list[0]
  }

  componentWillMount() {
    const { delay = 1 } = this.props;
    // const timeout = setTimeout(() =>
    //   this.setState({
    //     interval: setInterval(this.setElement, 5000)
    //   })
    // , delay);
    // this.setState({
    //   timeout
    // })
    this.setState({
      interval: setInterval(this.setElement, delay * 2000)
    })
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  setElement = () => {
    const { list } = this.props;
    const { currentElement } = this.state;
    const index = list.indexOf(currentElement) + 1;
    let element;
    if (index === list.length) {
      element = list[0]
    } else {
      element = list[index];
    }
    this.setState({
      currentElement: element
    })
  }

  render () {
    const { currentElement } = this.state;
    const { position } = this.props;
    return (
      <span className={`content content-${position}`}>
        <span key={currentElement} className="element">{currentElement}</span>
      </span>
    )
  }
}

export default Roll