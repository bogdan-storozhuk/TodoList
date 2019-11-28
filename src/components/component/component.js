export default class Component {
  constructor(anchor, props) {
    this.anchor = anchor;
    this.props = props;
    this.onInit();
    this.installListeners();
  }

  set props(value) {
    this.properties = value;
    this.onPropertyChange(this.properties);
  }

  get props() {
    return this.properties;
  }

  onInit() {
    console.log('init');
  }

  onPropertyChange(props) {
    this.anchor.innerHTML = this.render();
  }

  onDestroy() {
    this.anchor.innerHTML = null;
  }
  
  installListeners() {}
}