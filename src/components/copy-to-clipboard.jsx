import React from "react";
import ReactDOM from "react-dom";
import Clipboard from "clipboard";

export default class CopyToClipboard extends React.Component {
  constructor(props) {
    super(props);
    this.clipboard = null;
  }

  componentDidMount() {
    this.clipboard = new Clipboard(ReactDOM.findDOMNode(this.refs.copyToClipboard));
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <button
        ref="copyToClipboard"
        className="copy-to-clipboard-button"
        data-clipboard-text={this.props.containerElement.getElementsByClassName("ecologyCode")[0].innerText}
      >
        Copy To Clipboard
      </button>
    );
  }
}

CopyToClipboard.propTypes = {
  containerElement: React.PropTypes.object
};
