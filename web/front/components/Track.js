/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const Track = ({ pk, sentence, deleteLink, onDelete }) => {
  const btnDeleteTrackClick = async (e) => {
    e.preventDefault();
    if (deleteLink) {
      await axios.get(deleteLink);
      if (onDelete) onDelete(pk);
    }
  };

  return (
    <div className="d-inline bg-dark text-white p-1 rounded mr-1">
      <span>{sentence}</span>
      <a href="#" onClick={btnDeleteTrackClick}>
        <i className="fa fa-times text-white ml-2 mr-1"></i>
      </a>
    </div>
  );
};

Track.propTypes = {
  sentence: PropTypes.string.isRequired,
  pk: PropTypes.number.isRequired,
  deleteLink: PropTypes.string,
  onDelete: PropTypes.func,
};

Track.defaultProps = {
  deleteLink: "",
  onDelete: null,
};
