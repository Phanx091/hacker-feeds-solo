import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { connect } from "react-redux";
// import { API_ACTIONS } from "../../redux/actions/apiActions";

import ShareIcon from '@material-ui/icons/Share';


const mapStateToProps = reduxState => ({
    rss: reduxState.rss,
    api: reduxState.api,

  });

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }



function getModalStyle() {
  const top = 40 ;
  const left = 40;

  return {
    top: `${top}%`,
    left: `${left}%`,
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textarea: {
        width: '200px!important',

    }
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };
  


componentDidMount() {
    // this.props.dispatch({type: API_ACTIONS.FETCH_API});
}


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

        <Typography gutterBottom></Typography>

        <ShareIcon onClick={this.handleOpen} />
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <Typography variant="title" id="modal-title">
              <br/><input height='10px' type="textarea" placeholder={JSON.stringify(this.props.link)}/>
        
            <p>this.props.rss: {JSON.stringify(this.props.link)}</p>
            </Typography>
            
            <SimpleModalWrapped />
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
const SimpleModalWrapped = withStyles(styles)(SimpleModal);
export default connect(mapStateToProps)(withStyles(styles)(SimpleModalWrapped));
