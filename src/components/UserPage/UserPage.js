import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/userActions'
import Nav from '../../components/Nav/Nav';
// import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import axios from 'axios';


const mapStateToProps = state => ({
  user: state.user,
});

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rssList: [],
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchUser());
    this.getItems();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }



  getItems() {
    console.log(config);
    axios.get('/api/rss', config)
      .then(response => {
        this.setState({
          rssList: response.data,
        });
      })
      .catch((error) => { throw error; });
  }






  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1 id="welcome">
            Welcome, { this.props.user.userName }!
          </h1>
   
          {JSON.stringify(this.state.rssList)}
          <ul>
            {this.state.rssList.map(feed =>
              <li key={feed.id}><div style={{ textAlign:"center", margin:"10px", padding:"10px", border:"1px solid black" }}>
                <img style={{ width: "170px", height: "50px" }} src={feed.image} alt={feed.description} /><br />
                  {feed.title}<br /> 
                {/* <button onClick={() => this.deleteItem(item.id)}> </button> */}
                </div>
              </li>
            )}
          </ul>
            {/* <button onClick={this.logout}> Log Out </button> */}
      </div>

         
      );
    }

    return (
      <div>
        <Nav />
        { content }
     
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

