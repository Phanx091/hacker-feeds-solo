import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import { RSS_ACTIONS } from "../../redux/actions/rssActions";
// react-moment
import Moment from 'react-moment';
// import 'moment-timezone';
import moment from 'moment';

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
  rss: reduxState.rss
});
class UserPageApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      rss: [],
    } 
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rss !== this.state.rss) {
      console.log(this.state.rss);
        this.mapApiToFetchData();
    }
  }

  componentDidMount() {
    // this.props.dispatch({type: RSS_ACTIONS.FETCH_RSS});
    this.setState({
      rss: this.props.rss,
    });
    this.logIt();
  }


  mapApiToFetchData() {
    console.log('mapApiToFetchData:', this.props.rss);
    this.state.rss.forEach(data => {
      this.fetchApi(data.url)
    });
  }
  
  fetchApi = (url) => {
    const apiKey = 'aslzrjijkn6uvhmtk18wck8vhkadgl2iwdv2yejm';
    axios
    .get(
      `https://api.rss2json.com/v1/api.json?rss_url=${url}&api_key=${apiKey}&order_by=pubDate&order_dir=desc`)
    .then(response => {
      console.log('LOOK AT ME!!!!!', response);
      this.setState({
        apiData: [ ...this.state.apiData, ...response.data],
      });
      console.log('fetchAPI response', response)
      this.logIt();
    })
    .catch(error => {
      console.log(`ERROR on axios.get.API`, error);
    });
  }
  
  logIt = () => {
    console.log('log it-----------> this.props:',this.props.rss);
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
    // let obj = [...this.state.apiData];
    // obj.sort((a, b) => a.pubDate > b.pubDate)
    // obj.map((item, i) =>(<div key={i}> {item.pubDate}</div>))
  const dataToFormat = (a, b) => {
    return moment((a, b) => a.pubDate - b.pubDate).format('YYYY/MM/DD');
  }

  console.log(`Success axios.get.API`, this.state.apiData);
  const { classes } = this.props;
    return (
      <div>
        {this.state.apiData.sort(dataToFormat).map((data, i) => {
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
       
        {data.pubDate}  or  <br/>
      
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

