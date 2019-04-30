import React from "react";

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { articles: state.articles };
};
const List = connect(mapStateToProps,null)(ConnectedList);
export default List;