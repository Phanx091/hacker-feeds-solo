import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import "./SnackBarStyle.css";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

class SnackbarAlert extends React.Component {
  state = {
    open: false,
    Transition: null
  };

  handleClick = Transition => () => {
    this.setState({ open: true, Transition });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <div className="centerButton">
          <Button onClick={this.handleClick(TransitionUp)}>Add</Button>
        </div>

        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.state.Transition}
          color="secondary"
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">RSS added</span>}
        />
      </div>
    );
  }
}

export default SnackbarAlert;
