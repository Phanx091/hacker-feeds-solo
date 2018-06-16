import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
// import { API_ACTIONS } from "../../redux/actions/apiActions";
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import {FAVORITE_ACTIONS} from '../../redux/actions/favoriteActions';





const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    icon: {
      margin: theme.spacing.unit * 2,
    },
  });


const mapStateToProps = reduxState => ({
    rss: reduxState.rss,
    api: reduxState.api,

  });
class FavoriteIconButton extends React.Component {
  state = {
    icon: false,
   
  };
handleAddFavorites = () => {
console.log('click ckick');
this.setState({
    icon: !this.state.icon,
  
})
// this.setStates({
//     favorite: this.props.favorite,
// })
this.props.dispatch({type: FAVORITE_ACTIONS.ADD_FAVORITE, payload: this.props.favorite});

console.log('Add Favorite:', this.props.favorite);
 
}
  render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
        <IconButton aria-label="Add to favorites" onClick={this.handleAddFavorites}>
            {this.state.icon ? <FavoriteIcon className={classes.icon} color="secondary"/> : <FavoriteBorder color="primary" />}
        </IconButton>
    </div>
    );
  }
}

// FavoriteIconButton.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps)(withStyles(styles)(FavoriteIconButton));
