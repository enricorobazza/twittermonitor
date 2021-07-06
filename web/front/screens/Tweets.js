/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Navbar } from "../components/Navbar";
import { Tweet } from "../components/Tweet";
import { Track } from "../components/Track";
import { AddTrack } from "../components/AddTrack";

const NumberCard = ({ text, number, color }) => (
  <div className="col-6 p-2">
    <div className={`text-white text-center bg-${color}`}>
      <div>{text}</div>
      <div>{number}</div>
    </div>
  </div>
);

NumberCard.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
};

NumberCard.defaultProps = {
  text: "",
  number: 0,
  color: "primary",
};

export const Tweets = ({
  tweets: _tweets,
  userEmail,
  positive: _positive,
  negative: _negative,
  tracks: _tracks,
  refreshLink,
  addLink,
  logoutLink,
  homeLink,
}) => {
  const [tweets, setTweets] = useState(_tweets);
  const [tracks, setTracks] = useState(_tracks);
  const [positive, setPositive] = useState(_positive);
  const [negative, setNegative] = useState(_negative);
  const [loading, setLoading] = useState(false);
  const [showAddTrack, setShowAddTrack] = useState(false);

  useEffect(() => {
    setTweets(_tweets);
  }, [_tweets]);

  useEffect(() => {
    setTracks(_tracks);
  }, [_tracks]);

  useEffect(() => {
    setPositive(_positive);
  }, [_positive]);

  useEffect(() => {
    setNegative(_negative);
  }, [_negative]);

  const btnRefreshClick = async () => {
    if (refreshLink === "") return;
    setLoading(true);
    try {
      const res = await axios.get(refreshLink);
      setTweets(res.data.tweets);
      setPositive(res.data.positive);
      setNegative(res.data.negative);
      setLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      setLoading(false);
    }
  };

  const btnAddTrackClick = (e) => {
    e.preventDefault();
    setShowAddTrack(true);
  };

  const onAddTrack = (track) => {
    const newTracks = [...tracks];
    newTracks.push(track);
    setTracks(newTracks);
  };

  const onDeleteTrack = (pk) => {
    const newTracks = tracks.filter((track) => track.pk !== pk);
    setTracks(newTracks);
  };

  return (
    <>
      <AddTrack
        showState={{ show: showAddTrack, setShow: setShowAddTrack }}
        addLink={addLink}
        onAdd={onAddTrack}
      />
      <Navbar
        userEmail={userEmail}
        logoutLink={logoutLink}
        homeLink={homeLink}
      />
      <div className="d-flex flex-column align-items-center h-100 pt-3">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 bg-white">
          <div className="row mb-1 px-2">
            {tracks.map((track) => (
              <Track
                pk={track.pk}
                sentence={track.sentence}
                deleteLink={track.deleteLink}
                onDelete={onDeleteTrack}
              />
            ))}
          </div>
          <div className="row px-2">
            <a onClick={btnAddTrackClick} href="#">
              Adicionar sentença
            </a>
          </div>
          <div className="row mb-1">
            <NumberCard text="Positivos" number={positive} color="success" />
            <NumberCard text="Negativos" number={negative} color="danger" />
          </div>
          <div className="d-flex justify-content-between">
            <h3>últimos 20 tweets</h3>
            <button
              onClick={btnRefreshClick}
              type="button"
              className="btn btn-secondary"
            >
              <i className="fas fa-redo"></i>
            </button>
          </div>
          {!loading &&
            tweets &&
            tweets.map((tweet) => (
              <Tweet
                text={tweet.text}
                positive={tweet.positive}
                time={tweet.time}
              />
            ))}
          {loading && <span>Carregando...</span>}
        </div>
      </div>
    </>
  );
};

Tweets.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.any).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.string),
  userEmail: PropTypes.string,
  positive: PropTypes.number,
  negative: PropTypes.number,
  refreshLink: PropTypes.string,
  addLink: PropTypes.string,
  logoutLink: PropTypes.string,
  homeLink: PropTypes.string,
};

Tweets.defaultProps = {
  userEmail: "",
  positive: 0,
  negative: 0,
  refreshLink: "",
  addLink: "",
  logoutLink: "",
  homeLink: "",
  tracks: [],
};
