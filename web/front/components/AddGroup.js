/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import qs from "qs";

export const AddGroup = ({ showState, addLink, onAdd }) => {
  const [group, setGroup] = useState("");

  useEffect(() => {
    if (showState.show) $("#addGroupPopup").modal("show");
    else {
      $("#addGroupPopup").modal("hide");
    }
  }, [showState.show]);

  $("#addGroupPopup").on("hide.bs.modal", () => {
    if (showState.show) showState.setShow(false);
  });

  const btnAdicionarClick = async () => {
    if (addLink === "") return;
    const csrftoken = document.querySelector(
      "[name=csrfmiddlewaretoken]"
    ).value;

    const res = await axios.post(
      addLink,
      qs.stringify({
        group,
      }),
      {
        headers: {
          "X-CSRFToken": csrftoken,
        },
      }
    );
    if (onAdd) {
      onAdd(res.data);
    }
    setGroup("");
    showState.setShow(false);
  };

  return (
    <div
      className="modal fade"
      id="addGroupPopup"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Adicionar grupo</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-row">
              <label>Grupo:</label>
              <input
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              <i className="fa fa-times mr-1"></i> Fechar
            </button>
            <button
              onClick={btnAdicionarClick}
              type="button"
              className="btn btn-primary"
            >
              <i className="fa fa-plus mr-1"></i> Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AddGroup.propTypes = {
  showState: PropTypes.object.isRequired,
  addLink: PropTypes.string,
  onAdd: PropTypes.func,
};

AddGroup.defaultProps = {
  addLink: "",
  onAdd: null,
};
