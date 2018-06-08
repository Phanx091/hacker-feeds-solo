import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";



const mapStateToProps = reduxState => ({
  
});
class UserPageApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
    };
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

  htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  

  render() {

    console.log(`Success axios.get.API`, this.state.apiData);
 
    return (


      <div>
        {this.state.apiData.map((data, i) => {




          return (
              

          <li key={i}>
            {data.title}
            <br />
            <img
              style={{ width: "200px", height: "200px", textAlign:"center", margin:"10px", padding:"10px", border:"1px solid black"}}
              src={data.thumbnail}
              alt={data.description}/>

            <br />
            <div style={{ textAlign:"center", margin:"10px", padding:"10px", border:"1px solid black" }}>
            <div dangerouslySetInnerHTML={{__html: data.content}}/> <br />{data.author}  <br />{data.pubDate} 

            
            </div>
          </li>
        )})}
      </div>

    );
  }
 
}



export default connect(mapStateToProps)(UserPageApi);
