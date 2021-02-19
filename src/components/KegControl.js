import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";

const centerAlign = {
  textAlign: "center",
  margin: "5%",
};

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
    };
  }

  //add new keg to list
  handleAddingNewKegtoList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };
  //select a keg
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg });
  };
  //delete keg
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({ selectedKeg: null });
  };
  //edit keg
  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  };
  //edit keg list
  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    // const { id, name, brand, price, abv, pintQuantity } = kegToEdit;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.toggleEdit();
    dispatch(action2);
    this.setState({
      selectedKeg: null,
    });
  };
  //sell pint(decrease pint quantity)
  handleSellPint = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    selectedKeg.pintQuantity--;
    this.setState({ selectedKeg: null });
  };
  //on click what state should show
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.props.editing) {
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
    } else if (this.props.kegFormVisibleOnPage) {
      currentVisibleState = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegtoList} />
      );
      buttonText = "Return to Keg List";
    } else {
      currentVisibleState = (
        <KegList
          kegList={this.props.masterKegList}
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
KegControl.propTypes = {
  masterKegList: PropTypes.object,
  kegFormVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool,
};
const mapStateToProps = (state) => {
  return {
    masterKegList: state.masterKegList,
    kegFormVisibleOnPage: state.kegFormVisibleOnPage,
    editing: state.editing,
  };
};
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
