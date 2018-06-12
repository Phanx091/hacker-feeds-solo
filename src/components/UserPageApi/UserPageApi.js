import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// react-moment
import Moment from 'react-moment';
// import 'moment-timezone';


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
    // marginLeft: 44,
    maxWidth: 400,
    // minWidth: 400,
    // padding: '10px',
    // display: 'block',
    transitionDuration: '0.3s',
    // borderRadius: 20,
    
    // height: '40vw'
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

// const mapStateToProps = reduxState => ({
  
// });
// class UserPageApi extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       apiData: [],

//     };
//   }
// componentDidMount() {
//   this.fetchApi();
//   }

//   fetchApi = () => {
//     const apiKey = 'aslzrjijkn6uvhmtk18wck8vhkadgl2iwdv2yejm';
//     axios
//     .get(
//       `https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}&api_key=${apiKey}&order_by=pubDate&order_dir=desc`)
//     .then(response => {
//       this.setState({
//         apiData: [...this.state.apiData, ...response.data.items],
//       });
//       // console.log(`this is the response: ${response.data.items}`);
      
//     })
//     .catch(error => {
//       console.log(`ERROR on axios.get.API`, error);
//     });
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
//             <div>
//             <img
//               style={{ width: "200px", height: "200px", textAlign:"center", margin:"10px", padding:"10px", border:"1px solid black"}}
//               src={data.enclosure.thumbnail}
//               alt={data.description}/>
//             </div>

//             <Moment fromNow ago>{data.pubDate}</Moment>

//             <br />
//             <div style={{ margin:"10px", padding:"10px", border:"1px solid black" }}>
//             <div className="jasonphan" dangerouslySetInnerHTML={{__html: "<style>img{display:None} a{color:blue!important} a:hover{color: red} p{justify-content:initial!important}</style>" + data.content}}/>
//             </div>
//             <br />{data.author}  <br />{data.pubDate} 
//           </li>
//         )})}
//       </div>
//     );
//   }
// }




// export default connect(mapStateToProps)(UserPageApi);

const mapStateToProps = reduxState => ({
});

class UserPageApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
    }


      //  this.state = { 
      //   apiData: {dataA:[],
      //     expanded: false,
      //     icon: false
      //    },

    //   this.state = { 
    //     apiData:[{
    //         data: [],
    //         expanded: false,
    //         icon: false,
    //       }
    //     ],
    //     updateApiData: {
    //       data: [],
    //       expanded: '',
    //       icon: '',
    //     }   
    // }   
  }
  componentDidMount() {
  this.fetchApi();
  }

  fetchApi = () => {
    const apiKey = 'aslzrjijkn6uvhmtk18wck8vhkadgl2iwdv2yejm';
    axios
    .get(
      `https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}&api_key=${apiKey}&order_by=pubDate&order_dir=desc`)
    .then(response => {
      this.setState({
        apiData: response.data.items,
        
    


        // this.setState({
        //   apiData: [...this.state.apiData, this.state.updateApiData],
        //   updateApiData: {
        //     data: [...this.this.state.apiData, ...response.data.items],
        //     expanded: '',
        //     icon: '',
        //   }

        // apiData:{
        //   dataA:[...this.state, response.data.items],
        //   expanded: false,
        //   icon: true,

        // } 
      });
    })
    .catch(error => {
      console.log(`ERROR on axios.get.API`, error);
    });
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



  // handleExpandClick = () => {
  //   this.setState({ apiData:{
  //     expanded: !this.state.apiData.expanded

  //   }
  //      });
  // };

  // handleAddFavorites = () => {
  //   console.log('add to favorite click handler', this.state.icon);
  //   this.setState({ apiData:{
  //     icon: false
  //   }
  //     });
  // }

  render() {
  
  console.log(`Success axios.get.API`, this.state.apiData);
  const { classes } = this.props;
  // const dateToFormat = '1976-04-19T12:59-0500';

    return (
      
      <div>

        {this.state.apiData.map((data, i) => {
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
            <Moment fromNow ago interval={30000}>{data.pubDate}</Moment>
        
 
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

