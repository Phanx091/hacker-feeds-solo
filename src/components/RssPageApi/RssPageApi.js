// React
import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { RSS_ACTIONS } from "../../redux/actions/rssActions";
import { FEED_ACTIONS } from "../../redux/actions/feedActions";

// Material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = reduxState => ({
  rss: reduxState.rss,
  api: reduxState.api,
  feed: reduxState.feed
});

const styles = {
  card: {
    borderRadius: 20,
    maxWidth: 160,
    overflow: 'hidden',
    maxHeight: 200,
    padding: 0,
    // margin: '5 auto', 
    height: '45vw',
    // display: 'flex',
    display: 'inline-block',
    // flexDirection: 'row wrap',
    
  },
  media: {
    height: 0,
    paddingTop: '40.25%', // 16:
    img: {
      objectFit: 'cover',
      height: '100%',
      width: 'auto',
      borderRadius: 10,
    }
  },
};
class RssPageApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    };
  }



  componentDidMount() {
    this.props.dispatch({type: FEED_ACTIONS.FETCH_FEED});
    this.props.dispatch({type: RSS_ACTIONS.FETCH_RSS})
  }
 
  handleClickForDelete = (id) => {
    console.log('click delete works', this.props);
    this.props.dispatch({type: RSS_ACTIONS.DELETE_RSS, id:id});
    this.props.dispatch({type: RSS_ACTIONS.FETCH_RSS})
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.feed.map((data, i) => {
          return (
            <li key={i}>
        <Card className={classes.card}>
        <div style={{margin: '0 auto', borderRadius: '40'}}>
          <CardMedia 
            className={classes.media}
            image={data.image} 
            title={data.title}
          />
          </div>
          <CardContent>
            <Typography style={{ fontSize: '10px', textAlign: 'center' }}  component="h2">
            {data.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{ fontSize: '10px', padding: '0 20px',}} size="small" color="primary" onClick={() =>  { if (window.confirm('Are you sure you wish to delete this item?'))  this.handleClickForDelete(this.props.rss[i].id)}}>
              Remove from List
            </Button>
          </CardActions>
        </Card>
        </li>
      )})}
      </div>
    );
  }
}
RssPageApi.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(RssPageApi));
