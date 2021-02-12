import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegFormVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false,
    };
  }

  //add new keg to list
  handleAddingNewKegtoList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      kegFormVisibleOnPage: false,
    });
  };
  //select a keg
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0];
    this.setState({ selectedKeg: selectedKeg });
  };
  //delete keg
  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(
      (keg) => keg.id !== id
    );
    this.setState({ masterKegList: newMasterKegList, selectedKeg: null });
  };
  //edit keg
  handleEditClick = () => {
    this.setState({ editing: true });
  };
  //edit keg list
  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null,
    });
  };
  //sell pint(decrease pint quantity)
  handleSellPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0];
    selectedKeg.pintQuantity--;
    this.setState({ selectedKeg: null });
  };
  //on click what state should show
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        kegFormVisibleOnPage: false,
        selectedKeg: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        kegFormVisibleOnPage: !prevState.kegFormVisibleOnPage,
      }));
    }
  };

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentVisibleState = (
        <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.kegFormVisibleOnPage) {
      currentVisibleState = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegtoList} />
      );
      buttonText = "Return to Keg List";
    } else {
      currentVisibleState = (
        <KegList
          kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}
          onClickingSellPint={this.handleSellPint}
        />
      );
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <hr />
        <button class="btn btn-primary" onClick={this.handleClick}>
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}

export default KegControl;
