import React from "react";
import { connect } from "react-redux";
import { onClickFilter } from "../../actions";

import "./item-status-filter.css";

const ItemStatusFilter = ({ filter, onClickFilter }) => {
  const buttonsName = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  const buttons = buttonsName.map((button, idx) => {
    const isActive = button.name === filter;

    const classNames = isActive ? "btn btn-info" : "btn btn-outline-secondary";

    return (
      <button 
        key={idx}
        type="button" 
        className={classNames} 
        onClick={() => {
          onClickFilter(button.name);
        }}>
        {button.label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

const mapStateToProps = ({ filter }) => {
  return {
    filter,
  };
};

const mapDispatchToProps = {
  onClickFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemStatusFilter);
