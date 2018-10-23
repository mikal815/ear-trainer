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
        {/* Minor Sixth */}
        <Button onClick={this.toggle} style={btnStyle}>{this.props.buttonLabel}Minor Sixth</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={modalHeader}>Minor Sixth</ModalHeader>
          <ModalBody style={modalBody}>
              <h4 style={ascendStyle}>Ascending Minor Sixth Songs</h4>
                <h6 style={textStyle}>We Are Young (Fun)</h6>
                <h6 style={textStyle}>In My Life (Beatles)</h6>
                <h6 style={textStyle}>She's a Woman (Beatles)</h6>
              <h4 style={descStyle}>Descending Minor Sixth Songs</h4>
                <h6 style={textStyle}>100 Years (Five for Fighting)</h6>
                <h6 style={textStyle}>You're Everything (Chick Corea)</h6>
                <h6 style={textStyle}>Love Story (Theme Song)</h6>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;