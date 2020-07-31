import React from "react";

const Filter = ({ onSelect, selected, items }) => {
  const classes = "badge badge-pill filter ml-3 mb-2";

  return (
    <React.Fragment>
      {items.map((item) => (
        <span
          className={
            selected === item.name ? classes + " item-selected" : classes
          }
          onClick={() => onSelect(item.name)}
          key={item.id}
        >
          {item.name}
        </span>
      ))}
    </React.Fragment>
  );
};

export default Filter;
