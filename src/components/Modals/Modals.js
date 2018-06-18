import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from "react-redux";

import ShareIcon from '@material-ui/icons/Share';

const mapStateToProps = reduxState => ({
    rss: reduxState.rss,
    api: reduxState.api,

  });

const styles = theme => ({
  paperClass: {
    position: 'relative',
    width: theme.spacing.unit * 90,
    height: theme.spacing.unit * 15,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing.unit * 2,
    margin: 80,
    display: 'inline-block',
  },
});
class SimpleModal extends React.Component {
  state = {
    open: false,
  };
  
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    // const { linkIt } = this.props.api.items.link;
    return (
      <div>
        <ShareIcon onClick={this.handleOpen} />
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        > 
          <div className={classes.paperClass}> 
            <p className="paper">Copy url:</p>
            {JSON.stringify(this.props.link)}

          </div>
        </Modal>     

    </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(SimpleModal);
export default connect(mapStateToProps)(withStyles(styles)(SimpleModal));
