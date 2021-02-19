import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { connect } from "react-redux";

const centerAlign = {
  textAlign: "center",
  margin: "5%",
};

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // kegFormVisibleOnPage: false,
      // masterKegList: [],
      selectedKeg: null,
      // editing: false,
    };
  }

  //add new keg to list
  handleAddingNewKegtoList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, abv, pintQuantity } = newKeg;
    const action = {
      type: "ADD_KEG",
      id,
      name,
      brand,
      price,
      abv,
      pintQuantity,
    };
    dispatch(action);
    const action2 = {
      type: "TOGGLE_FORM",
    };
    dispatch(action2);
    // this.setState({
    //   masterKegList: newMasterKegList,
    //   kegFormVisibleOnPage: false,
    // });
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
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_KEG",
    };
    dispatch(action);
    this.setState({ selectedKeg: null });
  };
  //edit keg
  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: "TOGGLE_EDIT",
    };
    dispatch(action);
  };
  //edit keg list
  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, abv, pintQuantity } = kegToEdit;
    const action = {
      type: "ADD_KEG",
      id,
      name,
      brand,
      price,
      abv,
      pintQuantity,
    };
    dispatch(action);
    const action2 = {
      type: "TOGGLE_EDIT",
    };
    dispatch(action2);
    this.setState({
      // masterKegList: editedMasterKegList,
      // editing: false,
      selectedKeg: null,
    });
  };
  //sell pint(decrease pint quantity) change state to props?
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
        // kegFormVisibleOnPage: false,
        selectedKeg: null,
        // editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: "TOGGLE_FORM",
      };
      dispatch(action);
      // this.setState((prevState) => ({
      //   kegFormVisibleOnPage: !prevState.kegFormVisibleOnPage,
      // }));
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
        <div style={centerAlign}>
          <button className="btn btn-warning" onClick={this.handleClick}>
            {buttonText}
          </button>
          <br />
          <br />
          <img
            src="http://www.clker.com/cliparts/a/7/3/7/11954248811889296603johnny_automatic_pony_keg.svg.hi.png"
            width="10%"
            height="auto"
            alt="Beer Keg"
          />
        </div>
      </React.Fragment>
    );
  }
}

KegControl = connect()(KegControl);

export default KegControl;
