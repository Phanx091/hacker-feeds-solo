import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import Nav from "../../components/Nav/Nav";
import { FAVORITE_ACTIONS } from "../../redux/actions/favoriteActions";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./Favorite.css";
import swal from "sweetalert";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { ExpansionPanel, ExpansionPanelSummary } from "@material-ui/core";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

const mapStateToProps = reduxToState => ({
  user: reduxToState.user,
  favorite: reduxToState.favorite
});

const styles = theme => ({
  root: {
    width: "100%",
    minWidth: "100%",
    margin: 0
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "100.33%",
    flexShrink: 0,
    margin: 1
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(3),
    color: theme.palette.text.secondary,
    margin: 1
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      fontSize: 20
    }
  }
});

class FavoritePage extends Component {
  state = {
    expanded: null
  };
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  componentDidMount() {
    this.props.dispatch(fetchUser());
    this.props.dispatch({ type: FAVORITE_ACTIONS.FETCH_FAVORITE });
    this.logIt();
  }

  logIt = () => {
    console.log("this is favorites", this.props.favorite);
  };

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push("home");
    }
  }

  handleClickForDelete = id => {
    swal({
      title: `Are you sure, ${this.props.user.userName}?`,
      text: "Once deleted, you may need not find this article again.",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal("Deleted!", {
          icon: "success"
        });
        this.props.dispatch({ type: FAVORITE_ACTIONS.DELETE_FAVORITE, id });
      } else {
        swal("Your article safe!");
      }
    });

    console.log("click delete works", this.props);
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <Nav />
        <h2>My Favorite Articles</h2>
        <b>Total Articles ({this.props.favorite.length})</b>

        <Divider />

        <ul>
          {this.props.favorite.map((list, i) => {
            return (
              <li key={i}>
                <div className={classes.root}>
                  <ExpansionPanel
                    expanded={expanded === "panel3"}
                    onChange={this.handleChange("panel3")}
                  >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.Heading}>
                        {list.title}
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant="caption">
                        <div
                          className="jasonphan"
                          dangerouslySetInnerHTML={{
                            __html:
                              "<style>img{display:None} p{justify-content:initial!important}</style>" +
                              list.description
                          }}
                        />
                      </Typography>

                      <Typography variant="caption">
                        {list.author}
                        <br />
                        {moment(list.pubDate).format("MM/DD/YY")}
                        <br />
                        <a href={list.link} className={classes.link}>
                          Link
                        </a>
                        <br />
                        <IconButton
                          className={classes.button}
                          aria-label="Delete"
                        >
                          <DeleteIcon
                            onClick={() => {
                              this.handleClickForDelete(list.id);
                            }}
                          />
                        </IconButton>
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

FavoritePage.propTypes = {
  classes: PropTypes.object.isRequired
};

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(FavoritePage));
