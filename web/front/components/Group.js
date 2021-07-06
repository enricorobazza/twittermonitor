/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const Group = ({ pk, name, link, deleteLink, onDelete }) => {
  const onDeleteClick = async (e) => {
    e.preventDefault();
    await axios.get(deleteLink);
    if (onDelete) onDelete(pk);
  };

  return (
    <div className="p-3 my-2 card-container d-flex justify-content-between align-items-center">
      <span>{name}</span>
      <div className="d-inline">
        <a href={link} className="btn btn-primary">
          <i className="fa fa-eye text-white"></i>
        </a>
        {deleteLink !== "" && (
          <a href="#" onClick={onDeleteClick} className="btn btn-danger ml-2">
            <i className="fa fa-times text-white"></i>
          </a>
        )}
      </div>
    </div>
  );
};

Group.propTypes = {
  pk: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  deleteLink: PropTypes.string,
  onDelete: PropTypes.func,
};

Group.defaultProps = {
  link: "",
  deleteLink: "",
  onDelete: null,
};
