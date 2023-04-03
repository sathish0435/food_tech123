class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeID: 0,
        wrapperStyle: {
          backgroundImage: `url('${this.props.data[0].img}')` },
  
        panelStyle: {
          background: this.props.data[0].colour },
  
        buttonHover: false,
        buttonStyle: {
          color: '#ffffff' } };
  
  
    }
    _changeActive(id) {
      this.setState({
        activeID: id,
        wrapperStyle: {
          backgroundImage: `url('${this.props.data[id].img}')` },
  
        panelStyle: {
          backgroundColor: this.props.data[id].colour } });
  
  
    }
    _buttonColour() {
      if (!this.state.buttonHover) {
        this.setState({
          buttonHover: true,
          buttonStyle: {
            color: this.props.data[this.state.activeID].colour } });
  
  
      } else {
        this.setState({
          buttonHover: false,
          buttonStyle: {
            color: '#ffffff' } });
  
  
      }
    }
    render() {
      return /*#__PURE__*/(
        React.createElement("section", { className: "wrapper", style: this.state.wrapperStyle }, /*#__PURE__*/
        React.createElement(Selectors, {
          data: this.props.data,
          activeID: this.state.activeID,
          _changeActive: this._changeActive.bind(this) }), /*#__PURE__*/
  
        React.createElement(Panel, {
          data: this.props.data[this.state.activeID],
          panelStyle: this.state.panelStyle,
          buttonStyle: this.state.buttonStyle,
          _buttonColour: this._buttonColour.bind(this) })));
  
  
  
    }}
  
  class Panel extends React.Component {
    render() {
      return /*#__PURE__*/(
        React.createElement("aside", { className: "panel", style: this.props.panelStyle }, /*#__PURE__*/
        React.createElement("h2", { className: "panel-header" }, this.props.data.header), /*#__PURE__*/
        React.createElement("p", { className: "panel-info" }, this.props.data.body), /*#__PURE__*/
        React.createElement("button", { className: "panel-button",
          style: this.props.buttonStyle,
          onMouseEnter: this.props._buttonColour,
          onMouseLeave: this.props._buttonColour }, "Read More")));
  
  
  
  
    }}
  
  class Selectors extends React.Component {
    _handleClick(e) {
      if (this.props.id !== this.props.activeID) {
        this.props._changeActive(this.props.id);
      } else {
        return;
      }
    }
    render() {
      return /*#__PURE__*/(
        React.createElement("div", { className: "selectors" },
        this.props.data.map((item) => /*#__PURE__*/
        React.createElement(Selector, {
          key: item.id,
          id: item.id,
          _handleClick: this._handleClick,
          _changeActive: this.props._changeActive,
          activeID: this.props.activeID }))));
  
  
  
  
    }}
  
  class Selector extends React.Component {
    render() {
      let componentClass = 'selector';
      if (this.props.activeID === this.props.id) {
        componentClass = 'selector active';
      }
      return /*#__PURE__*/(
        React.createElement("div", { className: componentClass, onClick: this.props._handleClick.bind(this) }));
  
    }}
  
  
  const data = [{
    id: 0,
    header: 'Paper Presentation',
    body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
    colour: '#242846',
    img: './assets/img/img2.avif' },
  {
    id: 1,
    header: 'Poster Presentationt',
    body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
    colour: '#ba9077',
    img: './assets/img/img3.avif' },
  {
    id: 2,
    header: 'Idea Presentation',
    body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
    colour: '#1ABC9C',
    img: './assets/img/img4.avif' },
  {
    id: 3,
    header: 'Workshop – Food Testing',
    body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
    colour: '#C0392B',
    img: './assets/img/img5.avif' },
  {
    id: 4,
    header: 'Startup Expo',
    body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
    colour: '#513B56',
    img: './assets/img/img6.avif' },
    {
        id: 5,
        header: 'Product Development Expo',
        body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
        colour: '#513B56',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg' }];
  
  
  
  ReactDOM.render( /*#__PURE__*/React.createElement(App, { data: data }), document.querySelector('#app'));