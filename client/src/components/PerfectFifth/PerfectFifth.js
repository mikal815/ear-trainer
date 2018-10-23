import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import "./Alert.css"

const modalHeader = {
    backgroundColor: "mediumslateblue"
}

const modalBody = {
    backgroundColor: "lavender"
}

const btnStyle = {
    backgroundColor: 'white',
    borderColor: 'white',
    color: 'black',
    width: '100%',
    fontSize: "80%",
    marginBottom: "-3%",
    marginTop: "-4%"
}

const textStyle = {
    textAlign: 'center',
}

const ascendStyle = {
    textAlign: 'center',
    color: 'seagreen'
}

const descStyle = {
    color: 'royalblue',
    textAlign: 'center',
    marginTop: '5%',
}

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        {/* Minor Second */}
        <Button onClick={this.toggle} style={btnStyle}>{this.props.buttonLabel}Perfect Fifth</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={modalHeader}>Perfect Fifth</ModalHeader>
          <ModalBody style={modalBody}>
              <h4 style={ascendStyle}>Ascending Perfect Fifth Songs</h4>
                <h6 style={textStyle}>Twinkle Twinkle Little Star</h6>
                <h6 style={textStyle}>Star Wars (Theme Song)</h6>
                <h6 style={textStyle}>Can't Help Falling in Love (Elvis Presley)</h6>
              <h4 style={descStyle}>Descending Perfect Fifth Songs</h4>
                <h6 style={textStyle}>Back to the Future (Theme Song)</h6>
                <h6 style={textStyle}>Flintstones (Theme Song)</h6>
                <h6 style={textStyle}>It Don't Mean a Thing (Duke Ellington)</h6>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;