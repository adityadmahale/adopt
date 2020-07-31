import React from "react";

const Filter = ({ onSelect, selected }) => {
  const items = [
    "All",
    "Tropical and subtropical",
    "Succulents",
    "Forced bulbs",
    "Temperates",
  ];

  const classes = "badge badge-pill filter ml-3 mb-2";

  return (
    <React.Fragment>
      {items.map((item) => (
        <span
          className={selected === item ? classes + " item-selected" : classes}
          onClick={() => onSelect(item)}
          key={item}
        >
          {item}
        </span>
      ))}
    </React.Fragment>
  );
};

export default Filter;
