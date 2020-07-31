import React from "react";
import _ from "lodash";

const Pagination = ({ pageSize, itemNumbers, pageNumber, onPageChange }) => {
  const pages = Math.ceil(itemNumbers / pageSize);
  if (pages <= 1) return null;

  const pageList = _.range(1, pages + 1);
  const classes = "page-link";
  return (
    <ul className="pagination justify-content-center">
      {pageList.map((page) => (
        <li className="page-item" key={page}>
          <a
            className={
              pageNumber === page ? classes + " item-selected" : classes
            }
            href={`#${page}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
