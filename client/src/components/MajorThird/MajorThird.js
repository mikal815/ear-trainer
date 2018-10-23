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
        <Button onClick={this.toggle} style={btnStyle}>{this.props.buttonLabel}Major Third</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={modalHeader}>Major Third</ModalHeader>
          <ModalBody style={modalBody}>
              <h4 style={ascendStyle}>Ascending Major Third Songs</h4>
                <h6 style={textStyle}>Oh, When the Saints</h6>
                <h6 style={textStyle}>Kumbaya</h6>
                <h6 style={textStyle}>Four Seasons: Spring (Vivaldi)</h6>
              <h4 style={descStyle}>Descending Major Third Songs</h4>
                <h6 style={textStyle}>Fate - Symphoni No. 5 (Beethoven)</h6>
                <h6 style={textStyle}>Swing Low Sweet Chariot</h6>
                <h6 style={textStyle}>Summertime (Gershwin)</h6>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;