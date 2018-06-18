import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import Nav from "../../components/Nav/Nav";
import { FAVORITE_ACTIONS } from "../../redux/actions/favoriteActions";
// import axios from 'axios';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import './Favorite.css';

import Typography from "@material-ui/core/Typography";

import moment from 'moment'
import { Link } from 'react-router-dom';
import { ExpansionPanel, ExpansionPanelSummary } from "@material-ui/core";
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Avatar from '@material-ui/core/Avatar';
// import red from '@material-ui/core/colors/red';


const mapStateToProps = reduxToState => ({
  user: reduxToState.user,
  favorite: reduxToState.favorite
});

const styles = theme => ({
  root: {
    width: '100%',
    minWidth: '100%'

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '88.33%',
    flexShrink: 0,
    // minWidth: '10%',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(5),
    color: theme.palette.text.secondary,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      fontSize: 20,
    },
    // avatar: {
    //   backgroundColor: red,
    //   width: 10,
    //   height: 10,
    // },
  },
  
  
});


class FavoritePage extends Component {
  state = {
    expanded: null,
  }
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
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

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <Nav />
FAVORITE TITLE
  

            <ul>
              {this.props.favorite.map((list, i) => {
                return (
                  <li key={i}><div className={classes.root}>
                   <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    {/* <Avatar className={classes.avatar}>
                    <img src={list.thumbnail}/>
                    </Avatar> */}
                    <Typography className={classes.Heading}>
                    {list.title}
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>

                    {/* <Typography variant="caption">
                    {list.author}
                    <br/>
                    {moment(list.pubDate).format('MM/DD/YY')}
                    </Typography>
                    */}
                    



                    <Typography variant="caption">
                    {list.title}
                    </Typography>


                    <Typography variant="caption">
               
                    {list.author}
                    <br/>
                    {moment(list.pubDate).format('MM/DD/YY')}
                    <br/>
       
                   
                    <a href={list.link} className={classes.link}>Link</a>
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
