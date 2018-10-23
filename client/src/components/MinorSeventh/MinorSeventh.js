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
    marginTop: '8%',
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
        {/* Minor Seventh */}
        <Button onClick={this.toggle} style={btnStyle}>{this.props.buttonLabel}Minor Seventh</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={modalHeader}>Minor Seventh</ModalHeader>
          <ModalBody style={modalBody}>
              <h4 style={ascendStyle}>Ascending Minor Seventh Songs</h4>
                <h6 style={textStyle}>Somewhere (West Side Story)</h6>
                <h6 style={textStyle}>Star Trek (Original Theme Song)</h6>
                <h6 style={textStyle}>Last Midnight (Into the Woods)</h6>
              <h4 style={descStyle}>Descending Minor Seventh Songs</h4>
                <h6 style={textStyle}>Watermelon Man</h6>
                <h6 style={textStyle}>An American in Paris (Gershwin)</h6>
                <h6 style={textStyle}>Lady Jane; Chorus (Rolling Stones)</h6>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;