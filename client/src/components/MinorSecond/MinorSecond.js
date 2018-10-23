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
    marginTop: "-8%"
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
      modal: false,
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
        <Button onClick={this.toggle} style={btnStyle}>{this.props.buttonLabel}Minor Second</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={modalHeader}>Minor Second</ModalHeader>
          <ModalBody style={modalBody}>
              <h4 style={ascendStyle}>Ascending Minor Second Songs</h4>
                <h6 style={textStyle}>Jaws (Theme)</h6>
                <h6 style={textStyle}>Isn't She Lovely (Stevie Wonder)</h6>
                <h6 style={textStyle}>White Christmas (Irving Berlin)</h6>
              <h4 style={descStyle}>Descending Minor Second Songs</h4>
                <h6 style={textStyle}>Joy to the World (Christmas)</h6>
                <h6 style={textStyle}>Fur Elise (Beethoven)</h6>
                <h6 style={textStyle}>Jurassic Park (Theme)</h6>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;