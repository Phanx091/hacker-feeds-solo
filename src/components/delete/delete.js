// // React
// import React, { Component } from "react";

// // Redux
// import { connect } from "react-redux";
// import { RSS_ACTIONS } from "../../redux/actions/rssActions";
// // import { FEED_ACTIONS } from "../../redux/actions/feedActions";
// import { API_ACTIONS } from "../../redux/actions/apiActions";
// import RssPageApi from "../../components/RssPageApi/RssPageApi";

// // Material-ui
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const mapStateToProps = reduxState => ({
//   rss: reduxState.rss,
//   api: reduxState.api,
//   feed: reduxState.feed,
// });

// const styles = {
//   card: {
//     borderRadius: 20,
//     maxWidth: 160,
//     overflow: 'hidden',
//     maxHeight: 200,
//     padding: 0,
//     // margin: '5 auto', 
//     height: '45vw',
//     // display: 'flex',
//     display: 'inline-block',
//     // flexDirection: 'row wrap',
    
//   },
//   media: {
//     height: 0,
//     paddingTop: '40.25%', // 16:
//     img: {
//       objectFit: 'cover',
//       height: '100%',
//       width: 'auto',
//       borderRadius: 10,
//     }
//   },
// };
// class Delete extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       apiData: []
//     };
//   }



//   componentDidMount() {
//     this.props.dispatch({type: API_ACTIONS.FETCH_API}); // fetch data to display on dom 
//     this.props.dispatch({type: RSS_ACTIONS.FETCH_RSS});
//   }

//   handleClickForDelete = (id) => {
//     console.log('click delete works', this.props);
//     this.props.dispatch({type: RSS_ACTIONS.DELETE_RSS, id});
//   }
  
//   render() {
//     const { classes } = this.props;
//     return (
//       <div>
//       {/* <p>this.props.feed: {JSON.stringify(this.props.api.feed)}</p> */}
//       {/* <p>this.props.rss: {JSON.stringify(this.props.rss)}</p> */}
//         {this.props.api.feed.map((data, i) => {
//           return (
//             <li key={i}>
//               <Card className={classes.card}>
//               <div style={{margin: '0 auto', borderRadius: '40'}}>
//               {/* {JSON.stringify(data)} */}
//                 <CardMedia 
//                 className={classes.media}
//                 image={data.thumbnail}
//                 title={data.title}/>
//                 {data.url}
//                 </div>
//                 <CardContent>
//                   <Typography style={{ fontSize: '10px', textAlign: 'center' }}  component="h2">
//                   {data.title}
//                   </Typography>
//                 </CardContent>
                
//               </Card>
//             </li>
//       )})}
//       </div>
//     );
//   }
// }
// Delete.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
// export default connect(mapStateToProps)(withStyles(styles)(Delete));
