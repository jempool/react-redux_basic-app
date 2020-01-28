import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

class Post extends Component {
  componentDidMount() {
    // calling the new action creator
    this.props.getData(); 
  }

  render() {
    const articles = this.props.apiArticles.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return(
    <div>
      {articles}
    </div>
    );
  }
}

const mapStateToProps = state => ({
 apiArticles: state.remoteArticles.slice(0,3)
})

export default connect(mapStateToProps, { getData })(Post);
