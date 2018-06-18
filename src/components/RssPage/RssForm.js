import React, { Component } from "react";
import { connect } from "react-redux";
import { RSS_ACTIONS } from "../../redux/actions/rssActions";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import { fetchUser } from "../../redux/actions/userActions";

const mapStateToProps = reduxState => ({
  rss: reduxState.rss,
  api: reduxState.api,
  user: reduxState.user
});

class RssForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    };
  }
  componentDidMount() {
    this.props.dispatch({ type: RSS_ACTIONS.FETCH_RSS });
  }

  handleClickForDelete = id => {
    this.props.dispatch(fetchUser());
    swal({
      title: `Are you sure, ${this.props.user.userName}?`,
      text: "Once deleted, all the associated rss data will removed",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal("Deleted!", {
          icon: "success"
        });
        this.props.dispatch({ type: RSS_ACTIONS.DELETE_RSS, id });
      } else {
        swal("Your rss file is safe!");
      }
    });
  
    console.log("click delete works", this.props);
  };

  render() {
    return (
      <div>
        {this.props.rss.map((data, i) => {
          return (
            <li key={i}>
              {data.url}
              <Button
                style={{ fontSize: "10px", padding: "0 20px" }}
                size="small"
                color="primary"
                onClick={() => {
                  this.handleClickForDelete(data.id);
                }}
              >
                Remove
              </Button>
            </li>
          );
        })}
        Total rss ({this.props.rss.length})
      </div>
    );
  }
}

export default connect(mapStateToProps)(RssForm);
