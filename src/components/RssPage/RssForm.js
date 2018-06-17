// React
import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { RSS_ACTIONS } from "../../redux/actions/rssActions";

import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const mapStateToProps = reduxState => ({
  rss: reduxState.rss,
  api: reduxState.api,

});

class RssForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    };
  }









  componentDidMount() {
    this.props.dispatch({type: RSS_ACTIONS.FETCH_RSS});
  }

  handleClickForDelete = (id) => {
    console.log('click delete works', this.props);
    this.props.dispatch({type: RSS_ACTIONS.DELETE_RSS, id});
  }

  render() {
  
    // const getHostName = (url) => {
    //     const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    //     if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    //     return match[2];
    //     }
    //     else {
    //         return null;
    //     }
    // }
    
      
    // const { classes } = this.props;
    return (
      <div>
      {/* <p>this.props.feed: {JSON.stringify(this.props.api.feed)}</p> */}
      {/* <p>this.props.rss: {JSON.stringify(this.props.rss)}</p> */}
        {this.props.rss.map((data, i) => {
          return (
            <li key={i}>{data.url}
                <Button style={{ fontSize: '10px', padding: '0 20px',}} size="small" color="primary" onClick={() =>  { if (window.confirm('Are you sure you wish to delete this item?'))  this.handleClickForDelete(data.id)}}>
                Remove from List
                </Button>
            </li>
            )})}
              Total rss ({this.props.rss.length})
              <br/>
              Total Articles ({this.props.api.length})
      </div>
    );
  }
}
RssForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(RssForm);
