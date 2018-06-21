import React, { Component } from "react";
import { connect } from "react-redux";
import { RSS_ACTIONS } from '../../redux/actions/rssActions';
import Nav from "../../components/Nav/Nav";
import RecommendRSS from "../RecommendRSS/RecommendRSS";
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import SnackbarAlert from "../SnackBar/SnackBar";

const mapStateToProps = reduxToState => ({
  user: reduxToState.user,
  rss: reduxToState.rss
});
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
class AddRssPage extends Component {
  constructor(props) {
    super(props);
    this.state = ''

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push("/rss");
    }
  }
  handleClickForRSS = event => {
    event.preventDefault();
    const action = { type: RSS_ACTIONS.ADD_RSS, payload: this.state};
    this.props.dispatch(action);
    console.log(this.state);
    console.log(action);
  };

  handleChangeForRSS = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };
  render() {
    return (
      <div>
        <Nav />
        <h2>Add Rss</h2>
        <Divider/>
        <div className="addRss">
          <TextField
                name="url"
                placeholder="Add RSS url here"
                onChange={this.handleChangeForRSS}
                style={{width: '230px'}}
              />
          <Button color="primary" onClick={this.handleClickForRSS}><SnackbarAlert/></Button>
        </div>
        <b>Recommend RSS</b>
        <div>
          <RecommendRSS />

        </div>   
      </div>
    );
  }
}
AddRssPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(AddRssPage));
