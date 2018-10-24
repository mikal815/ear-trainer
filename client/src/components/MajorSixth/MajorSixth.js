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
        {/* Major Sixth */}
        <Button onClick={this.toggle} style={btnStyle}>{this.props.buttonLabel}Major Sixth</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={modalHeader}>Major Sixth</ModalHeader>
          <ModalBody style={modalBody}>
              <h4 style={ascendStyle}>Ascending Major Sixth Songs</h4>
                <h6 style={textStyle}>Dashing Through the Snow (Jungle Bells)</h6>
                <h6 style={textStyle}>My Way (Frank Sinatra)</h6>
                <h6 style={textStyle}>My Bonnie Lies Over the Ocean</h6>
              <h4 style={descStyle}>Descending Major Sixth Songs</h4>
                <h6 style={textStyle}>The Music of the Night (Phantom of the Opera)</h6>
                <h6 style={textStyle}>Nobody Knows the Trouble I've Seen</h6>
                <h6 style={textStyle}>Over There (George Cohan)</h6>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;