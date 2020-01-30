import React from "react";
import { connect } from "react-redux";

const ConnectedList = ({ articles }) => (
  <ul className="list-group">
    {articles.map(el => (
      <li key={el.id} className="list-group-item">{el.title}</li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return { articles: state.articles };
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
