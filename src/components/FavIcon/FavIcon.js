import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
// import { API_ACTIONS } from "../../redux/actions/apiActions";
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';



const mapStateToProps = reduxState => ({
    rss: reduxState.rss,
    api: reduxState.api,

  });


class FavoriteIconButton extends React.Component {
  state = {
    icon: false,
  };
  


handleAddFavorites = (event) => {
console.log('click ckick');
this.setState({
    icon: !this.state.icon,
})
// this.props.dispatch({type: API_ACTIONS.ADD_API});

console.log('Add Favorite:', this.props.favorite);

      
}


  render() {
    const { classes } = this.props;
    // const { linkIt } = this.props.api.items.link;
    return (
    <div>

        <IconButton aria-label="Add to favorites" onClick={this.handleAddFavorites}>
            {this.state.icon ? <FavoriteIcon /> : <DoneIcon/>}
        </IconButton>

    </div>
    );
  }
}

FavoriteIconButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.

export default connect(mapStateToProps)(FavoriteIconButton);
