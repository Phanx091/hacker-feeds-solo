import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { RSS_ACTIONS } from "../../redux/actions/rssActions";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing.unit * 1
  }
});

const mapStateToProps = reduxState => ({
  rss: reduxState.rss,
  api: reduxState.api
});
class RecommendAddIconButton extends React.Component {
  state = {
    icon: false
  };
  handleAddRSS = () => {
    console.log("click ckick");
    this.setState({
      icon: !this.state.icon
    });

    this.props.dispatch({
      type: RSS_ACTIONS.ADD_RSS,
      payload: this.props.addRecommend
    });

    console.log("Add RSS", this.props.addRecommend);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <IconButton
          className={classes.icon}
          aria-label="Add to favorites"
          onClick={this.handleAddRSS}
        >
          {this.state.icon ? (
            <FavoriteIcon color="secondary" />
          ) : (
            <i className="zmdi zmdi-rss zmdi-hc-2x mdc-text-orange" />
          )}
        </IconButton>
      </div>
    );
  }
}

export default connect(mapStateToProps)(
  withStyles(styles)(RecommendAddIconButton)
);
