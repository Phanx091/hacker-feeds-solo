import React, { Component } from "react";
import { connect } from "react-redux";
import { RSS_ACTIONS } from "../../redux/actions/rssActions";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fetchUser } from "../../redux/actions/userActions";
import { Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from '@material-ui/core/Divider';

const mapStateToProps = reduxState => ({
  rss: reduxState.rss,
  api: reduxState.api,
  user: reduxState.user
});
const styles = theme => ({
  root: {
    padding: 1
  },
  paper: {
    backgroundColor: theme.palette.background.paper
  },
  spacing: {
    // width: 10,
  }
  // title: {
  //   margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  // },
});

class RssForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    };
  }
  componentDidMount() {
    this.props.dispatch({ type: RSS_ACTIONS.FETCH_RSS });
  }

  handleClickForDelete = id => {
    this.props.dispatch(fetchUser());
    swal({
      title: `Are you sure, ${this.props.user.userName}?`,
      text: "Once deleted, all the associated rss data will removed",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal("Deleted!", {
          icon: "success"
        });
        this.props.dispatch({ type: RSS_ACTIONS.DELETE_RSS, id });
      } else {
        swal("Your rss file is safe!");
      }
    });

    console.log("click delete works", this.props);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        Total rss ({this.props.rss.length})
        <Divider />


            {this.props.rss.map((data, i) => {
              return (
                <li key={i}>
                  <div className={classes.paper}>
                 
                      {data.url}
                      <IconButton aria-label="Delete">
                        <DeleteIcon
                          onClick={() => {
                            this.handleClickForDelete(data.id);
                          }}
                        />
                      </IconButton>

                  </div>
                </li>
              );
            })}


      </div>
    );
  }
}

RssForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(RssForm));
