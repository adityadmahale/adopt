import React from "react";

const Filter = ({ onSelect, selected, items }) => {
  const classes = "badge badge-pill filter ml-3 mb-2";

  return (
    <React.Fragment>
      {items.map((item) => (
        <span
          className={
            selected === item._id ? classes + " item-selected" : classes
          }
          onClick={() => onSelect(item._id)}
          key={item._id}
        >
          {item.name}
        </span>
      ))}
    </React.Fragment>
  );
};

export default Filter;
