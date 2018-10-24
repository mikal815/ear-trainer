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
    marginBottom: "-3%"
};

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
    marginTop: "-4%"
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
        {/* Major Seventh */}
        <Button onClick={this.toggle} style={btnStyle}>{this.props.buttonLabel}Major Seventh</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={modalHeader}>Major Seventh</ModalHeader>
          <ModalBody style={modalBody}>
              <h4 style={ascendStyle}>Ascending Major Seventh Songs</h4>
                <h6 style={textStyle}>Take on Me (A-Ha)</h6>
                <h6 style={textStyle}>Somewhere Over the Rainbow (Wizard of Oz)</h6>
                <h6 style={textStyle}>Superman Theme</h6>
              <h4 style={descStyle}>Descending Major Seventh Songs</h4>
                <h6 style={textStyle}>I Love You (Cole Porter)</h6>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;