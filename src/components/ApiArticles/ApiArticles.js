import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = reduxState => ({
    reduxState,
  });

class ApiArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],


        }
    }


componentDidMount() {
    // console.log(`https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}`);
    axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}`)
    .then(response => {
        this.setState({
            apiData: response.data.items

        })
        // console.log(this.state.apiData); this works
        console.log(`Success axios.get.API`, response.data);
    })
    .catch(error => {
        console.log(`ERROR on axios.get.API`, error);
    })
}
  render() {

console.log(this.state);
            
    return (
        <div>
    
             {this.state.apiData.map((data, i) => (
                <li key={i}>{data.title} 
                 <img style={{ width: "50px", height: "50px" }} src={data.thumbnail} alt={data.description}/><br /> 
                 <pre>{data.content}</pre> {data.author}
                
                
                </li>
            ))}

            
           
        {/* // <li> */}
        {/* <div> */}
 {/* {JSON.stringify(this.state)} */}
          {/* <div style={{ textAlign:"center", margin:"10px", padding:"10px", border:"1px solid black" }}>
          <img style={{ width: "50px", height: "50px" }} src={this.state.apiData.thumbnail} alt={this.state.apiData.description} /><br /> */}

            {/* {this.state.apiData.title}{this.state.apiData.content}{this.state.apiData.author}<br />  */}
            {/* <ul>
            {this.state.apiData.map(articles,i) => <li key={i)>{articles.title}</li>)};
            </ul>
          </div> */}
        {/* // </li> */}

      </div>
    );
  }
}

export default connect(mapStateToProps)(ApiArticles);

