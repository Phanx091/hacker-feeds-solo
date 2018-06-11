import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// Material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { RSS_ACTIONS } from "../../redux/actions/rssActions";


// `https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}`)
const mapStateToProps = reduxState => ({
  reduxState
});

const styles = {
  card: {
    maxWidth: 150,
    maxHeight: 200,
    padding: 10,
    margin: 5, 
    height: '40vw',
    // display: 'flex',
    // display: 'inline-block',
    flexDirection: 'row wrap',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
    this.fetchFeedToApi();
  }


  fetchFeedToApi = () => {
    const apiKey = 'aslzrjijkn6uvhmtk18wck8vhkadgl2iwdv2yejm';
    axios
    .get(
      `https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}&api_key=${apiKey}&order_by=pubDate&order_dir=desc`)
    .then(response => {
      this.setState({
        apiData: response.data.feed
      });
      // console.log(this.state.apiData); this works
      // console.log(`Success axios.get.API`, response.data); // display get data
    })
    .catch(error => {
      console.log(`ERROR on axios.get.API`, error);
    });
  }
  handleClickForAdd = () => {
    console.log('click add works');
  }
  handleClickForDelete = (id) => {
    console.log('click delete works');
    this.props.dispatch({type: RSS_ACTIONS.DELETE_RSS, id});
    this.props.dispatch({type: RSS_ACTIONS.FETCH_RSS})

      // axios.delete(`/api/rss/${id}`).then((results) => {
      //   this.fetchFeedToApi();
      //   console.log('successful on delete', results)
      // }).catch(error => {
      //   throw error;
      // });
  }
//   render() {
//     return (
//       <li>
//         {/* {JSON.stringify(this.state)} */}
//         <div
//           style={{
//             textAlign: "center",
//             margin: "10px",
//             padding: "10px",
//             border: "1px solid black"
//           }}>
//           <img
//             style={{ width: "150px", height: "150px" }}
//             src={this.state.apiData.image}
//             alt={this.state.apiData.description}
//           />
//           <br />
//           {this.state.apiData.title}
//           <br />
//           <button onClick={this.handleClickForDelete()}>delete</button>
//         </div>
//       </li>
//     );
//   }
// }

// export default connect(mapStateToProps)(RssPageApi);


  render() {
    const { classes } = this.props;
    return (
      <div>
        <li>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={this.state.apiData.image} 
            title={this.state.apiData.title}
          />
          <CardContent>
            <Typography  style={{ fontSize: '10px', textAlign: 'center' }}  component="h2">
            {this.state.apiData.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{ fontSize: '10px', padding: '0 20px',}} size="small" color="primary" onClick={() =>  { if (window.confirm('Are you sure you wish to delete this item?'))  this.handleClickForDelete(this.props.feed.id)}}>
              Remove from List
            </Button>
          </CardActions>
        </Card>
        </li>
      </div>
    );
  }
}
RssPageApi.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(RssPageApi));
