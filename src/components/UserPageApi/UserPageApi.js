import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// DOMPurify
import DOMPurify from 'dompurify'
// import createDOMPurify from 'dompurify';
// import { JSDOM } from 'jsdom';



/// Material-ul-imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
/// Material-ul-imports 


/// Material-ul-const
const styles = theme => ({
  card: {
    // margin: 30,
    // overflow: 'hidden',
    // marginLeft: 44,
    // marginRight: 15,
    maxWidth: 200,
    padding: '10px',
    // display: 'block',
    width: '40vw',
    transitionDuration: '0.3s',
    // height: '40vw'
  },
  media: {
    height: 7,
    paddingTop: '56.25%', // 16:9
  },
  // title: {
  //   fontSize: 14,
  // },
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
  header: {
    borderRadius: 3,
  },



});
/// Material-ul-const


/// Material-ul 
/// Material-ul 
/// Material-ul 
/// Material-ul 
// const mapStateToProps = reduxState => ({
  
// });
// class UserPageApi extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       apiData: [],
//     };
//   }


//   componentDidMount() {
//     axios
//       .get(
//         `https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}`)
//       .then(response => {
//         this.setState({
//           apiData: [...this.state.apiData, ...response.data.items],
//         });
//       })
//       .catch(error => {
//         console.log(`ERROR on axios.get.API`, error);
//       });
//   }

//   htmlDecode(input){
//     var e = document.createElement('div');
//     e.innerHTML = input;
//     return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
//   }
  

//   render() {

//     console.log(`Success axios.get.API`, this.state.apiData);
 
//     return (


//       <div>
//         {this.state.apiData.map((data, i) => {
//           return (
//           <li key={i}>
//             {data.title}
//             <br />
//             {/* <img
//               style={{ width: "200px", height: "200px", textAlign:"center", margin:"10px", padding:"10px", border:"1px solid black"}}
//               src={data.thumbnail}
//               alt={data.description}/> */}

//             <br />
//             <div style={{ textAlign:"center", margin:"10px", padding:"10px", border:"1px solid black" }}>
//             <div dangerouslySetInnerHTML={{__html: data.content}}/> <br />{data.author}  <br />{data.pubDate} 
//             </div>
//           </li>
//         )})}
//       </div>

//     );
//   }
 
// }




// export default connect(mapStateToProps)(UserPageApi);

const mapStateToProps = reduxState => ({
});
// const apiKey = 'aslzrjijkn6uvhmtk18wck8vhkadgl2iwdv2yejm';
class UserPageApi extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiData: [],
      expanded: false };
      
  }

  componentDidMount() {
    axios
    .get(
      `https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}`)
    .then(response => {
      this.setState({
        apiData: [...this.state.apiData, ...response.data.items],
      });
    })
    .catch(error => {
      console.log(`ERROR on axios.get.API`, error);
    });
  }
  
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };



  
  render() {
//     const window = (new JSDOM('')).window;
// const DOMPurify = createDOMPurify(window);

DOMPurify.sanitize('<img src=x onerror=alert(1)//>');

var config = { ALLOWED_TAGS: ['p', '#text'], KEEP_CONTENT: false };
// var clean = DOMPurify.sanitize(config);
// document.getElementById('sanitized').innerHTML = clean
DOMPurify.sanitize(config)


    console.log(`Success axios.get.API`, this.state.apiData);
    const { classes } = this.props;
    

    return (
      <div>
        {this.state.apiData.map((data, i) => {
          return (
          <li key={i}>
        <Card className={classes.card}>
          <CardHeader className={classes.header}
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                hi
              </Avatar>
            }
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
            {data.pubDate}
        
 
            {/* {data.description} */}
            {/* </Typography> */}
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
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
              <Typography paragraph>
            {/* parahgraph 2 */}
              </Typography>
              {/* <Typography paragraph> */}
           
              {/* <div dangerouslySetInnerHTML={{__html: data.content}}/> */}
              {/* {data.content} */}
            <div className="jasonphan" dangerouslySetInnerHTML={{__html: "<style>img{display:None;}</style>" + data.content}}/>
              {/* </Typography> */}
            
              <Typography>
                 {/* </Typography> */}
                
                 {data.author}
                 
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

