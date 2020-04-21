import React from "react";
import { connect } from "react-redux";
import { onChangeSearch } from "../../actions";

const SearchPanel = ({ label, onChangeSearch }) => {
  return (
    <input
      type="text"
      className="form-control mr-2"
      placeholder="type to search"
      onChange={onChangeSearch}
      value={label}
    ></input>
  );
};

const mapStateToProps = ({ searchTodoLabel }) => {
  return {
    label: searchTodoLabel,
  };
};

const mapDispatchToProps = {
  onChangeSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
