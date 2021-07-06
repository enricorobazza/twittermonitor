/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../components/Navbar";
import { Group } from "../components/Group";
import { AddGroup } from "../components/AddGroup";

export const Index = ({
  groups: _groups,
  userEmail,
  addLink,
  logoutLink,
  homeLink,
}) => {
  const [groups, setGroups] = useState(_groups);
  const [showAddGroup, setShowAddGroup] = useState(false);

  useEffect(() => setGroups(_groups), [_groups]);

  const onGroupDelete = (pk) => {
    const newGroups = groups.filter((group) => group.pk !== pk);
    setGroups(newGroups);
  };

  const onAddGroup = (group) => {
    const newGroups = [...groups];
    newGroups.push(group);
    setGroups(newGroups);
  };

  const btnAddGroupClick = (e) => {
    e.preventDefault();
    setShowAddGroup(true);
  };

  return (
    <>
      <AddGroup
        showState={{ show: showAddGroup, setShow: setShowAddGroup }}
        addLink={addLink}
        onAdd={onAddGroup}
      />
      <Navbar
        userEmail={userEmail}
        logoutLink={logoutLink}
        homeLink={homeLink}
      />
      <div className="d-flex flex-column align-items-center h-100 pt-3">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <h3>grupos de palavras</h3>
            <a onClick={btnAddGroupClick} href="#">
              Adicionar grupo
            </a>
          </div>
          {groups.map((group) => (
            <Group
              pk={group.pk}
              name={group.name}
              link={group.link}
              deleteLink={group.deleteLink}
              onDelete={onGroupDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

Index.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.any).isRequired,
  userEmail: PropTypes.string,
  addLink: PropTypes.string,
  logoutLink: PropTypes.string,
  homeLink: PropTypes.string,
};

Index.defaultProps = {
  userEmail: "",
  addLink: "",
  logoutLink: "",
  homeLink: "",
};
