// React
import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { API_ACTIONS } from "../../redux/actions/apiActions";

// React-moment
import Moment from 'react-moment';

//Material-ul-imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DoneIcon from '@material-ui/icons/Done';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

/// Material-ul-const
const styles = theme => ({
  card: {
    margin: 0,
    overflow: 'hidden',
    maxWidth: 400,
    minWidth: 400,
    transitionDuration: '0.3s',
  },
  media: {
    height: 7,
    paddingTop: '56.25%', // 16:9
  },

  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const mapStateToProps = reduxState => ({
  rss: reduxState.rss,
  api: reduxState.api
});
class UserPageApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiList: [],
    } 
  }

componentDidMount() {
  this.props.dispatch({type: API_ACTIONS.FETCH_API});
  this.logIt();
}

logIt = () => {
  console.log('log it-----------> this.props:',this.state.api);
}
  handleExpandClick = () => {
    this.setState({ 
      expanded: !this.state.expanded
    })   
  };
  handleAddFavorites = () => {
    console.log('add to favorite click handler', this.state.icon);
    this.setState({
      icon: !this.state.icon
      });
  }
  render() {

  console.log('this.state.apiList:', this.state.apiList);


const dataToFormat = (a,b) => {
  let dateA = new Date(a.pubDate);
  let dateB = new Date(b.pubDate);
  return dateB - dateA;
}
  const { classes } = this.props;
    return (
      <div>
        {this.props.api.sort(dataToFormat).map((data, i) => {
          return (
          <li key={i}>
        <Card className={classes.card}>
          <CardHeader 
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            } 
            title={data.title}
          />  
          <CardMedia
            className={classes.media}
            image={data.thumbnail}/>
          <CardContent>
            {/* <Typography component="p"> */}
            {data.author}<br/>
         <Moment fromNow>{data.pubDate}</Moment>
            {/* {data.description} */}
            {/* </Typography> */}
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites" onClick={this.handleAddFavorites}>
              {this.state.icon ? <FavoriteIcon /> : <DoneIcon/>}
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
              {/* empty for now */}
              </Typography>
              {/* <Typography paragraph> */}
            <div className="jasonphan" dangerouslySetInnerHTML={{__html: "<style>img{display:None} a{color:blue!important} a:hover{color: red} p{justify-content:initial!important}</style>" + data.content}}/>
              {/* </Typography> */}
              <Typography>
              {/* </Typography> */}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </li>
        )})}
      </div>
    );
  }
}

UserPageApi.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(UserPageApi);
export default connect(mapStateToProps)(withStyles(styles)(UserPageApi));

