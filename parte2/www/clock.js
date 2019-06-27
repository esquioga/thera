class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (<div>
      <span id='date'>{this.state.date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
      <span id='timer'>{'   //' + this.state.date.toLocaleTimeString('pt-BR')}</span></div>);
  }
}

var clock = document.getElementById('clock');
ReactDOM.render(<Clock />, clock);