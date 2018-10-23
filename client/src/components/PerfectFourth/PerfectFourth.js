import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import "./Alert.css"

const modalHeader = {
    backgroundColor: "mediumslateblue",
}

const modalBody = {
    backgroundColor: "lavender",
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

const modalPopUp = {
  opacity: "100",
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
        <Button onClick={this.toggle} style={btnStyle}>{this.props.buttonLabel}Perfect Fourth</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={modalHeader}>Perfect Fourth</ModalHeader>
          <ModalBody style={modalBody}>
              <h4 style={ascendStyle}>Ascending Perfect Fourth Songs</h4>
                <h6 style={textStyle}>Amazing Grace</h6>
                <h6 style={textStyle}>Harry Potter (Theme Song)</h6>
                <h6 style={textStyle}>We Wish You a Merry Christmas</h6>
              <h4 style={descStyle}>Descending Perfect Fourth Songs</h4>
                <h6 style={textStyle}>Oh, Come All Ye Faithful</h6>
                <h6 style={textStyle}>George of the Jungle (Theme Song)</h6>
                <h6 style={textStyle}>Eine Kleine Nachtmusik (Mozart)</h6>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;