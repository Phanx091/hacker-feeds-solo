import React, { Component } from "react";
import { connect } from "react-redux";
import { RSS_ACTIONS } from '../../redux/actions/rssActions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './RecommendCss.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import RecommendAddIconButton from './RecommendIcon';
// import Button from "@material-ui/core/Button";


const mapStateToProps = reduxToState => ({
  user: reduxToState.user,
  rss: reduxToState.rss
});
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 500,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});
class RecommendRSS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: [],
    }
  }
  componentDidMount() {
    this.getRecommendedLinks();
  }
  // Get recommendList from database
  getRecommendedLinks(rss) {
    axios({
      method: "GET",
      url: "/api/rss/recommend",
      data: rss
  }).then((response) => {
      this.setState({
        recommendList: response.data
      })
      console.log('get RECOMMEND LIST', response.data)
  })
  .catch((error) => {
      alert('Error on axios post');
  });
}

// Adds recommendList to database:rss
handleForAddRecommendList(url) {
    const action = { type: RSS_ACTIONS.ADD_RSS, payload: {url:url}};
    this.props.dispatch(action);
}
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {this.state.recommendList.map((tile, i) => (
          <GridListTile key={i} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.image} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={

              
                <div className={classes.icon}>
              <RecommendAddIconButton addRecommend={tile} onClick={() => this.handleForAddRecommendList(tile.url)}/>
                </div>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
      
      <div>
      Click RSS icon to add  <i className="zmdi zmdi-rss zmdi-hc-2x mdc-text-orange"></i>
      <div>
    </div>



      {/* <div>
        Click RSS icon to add  <i className="zmdi zmdi-rss zmdi-hc-2x"></i>
        <div>
          <ul>
          {this.state.recommendList.map((list, i) => {
            return (
          <li key={i}> <div style={{textAlign: 'justify', margin: '10px', padding: 1}}><br/>{list.title} <br/><img border-radius='20%' height="120" width="120" src={list.image} alt="" className="img-responsive"/>
          <button onClick={() => this.handleForAddRecommendList(list.url)}><i className="zmdi zmdi-rss zmdi-hc-2x"></i></button></div></li>)})}
          </ul>*/}

       </div>
      </div> 
    );
  }
}

RecommendRSS.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(RecommendRSS));
