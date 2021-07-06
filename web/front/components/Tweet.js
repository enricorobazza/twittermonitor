/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from "react";
import PropTypes from "prop-types";

export const Tweet = ({ text, positive, time }) => {
  return (
    <div className="p-3 my-2 card-container d-flex justify-content-between align-items-center">
      <div className="mr-2">
        <div>{text}</div>
        <div className="text-secondary mt-2">{time}</div>
      </div>
      {positive ? (
        <div className="bg-success rounded px-3 py-2">
          <i className="fa fa-thumbs-up text-white"></i>
        </div>
      ) : (
        <div className="bg-danger rounded px-3 py-2">
          <i className="fa fa-thumbs-down text-white"></i>
        </div>
      )}
    </div>
  );
};

Tweet.propTypes = {
  text: PropTypes.string.isRequired,
  positive: PropTypes.bool.isRequired,
  time: PropTypes.string,
};

Tweet.defaultProps = {
  time: "",
};
