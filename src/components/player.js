import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import ReactAudioPlayer from 'react-audio-player';
import audio from './Wspaniała kobieta.mp3';

function Player(props) {

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const trackImageStyle = {
        height: "200px",
        width: "200px",
        borderRadius: "100px",
        backgroundColor: "#80ABC4",
        boxShadow:  "6px 6px 12px #6d91a7, -6px -6px 12px #93c5e1",
        margin: "20px 0px 20px 0px",
        border: "5px solid #80ABC4"
    }

    const titleStyle = {
        margin: "20px 20px 20px 20px",
        fontFamily: "'East Sea Dokdo', cursive",
        fontSize: "30px",
        backgroundColor: "#80ABC4",
        borderRadius: "10px",
        boxShadow:  "6px 6px 12px #6d91a7, -6px -6px 12px #93c5e1",
        padding: "10px",
        color: "#18344C",
    }

    const dataContainerStyle = {
        margin: "20px 0px 20px 0px",
        color: "#80ABC4",
    }

    const playBtnStyle = {
        margin: "20px 0px 20px 0px",
        width: "50px",
        height: "50px",
        borderRadius: "25px",
        backgroundColor: "#80ABC4",
        fontSize: "20px",
        lineHeight: "0.25em",
    }

    const audioplayer = {
        color: "#80ABC4",
    }

    return (
        <div style={containerStyle}>
            {console.log(props.track)}
            {
            props.track.album.picture 
            ?
            <img src={props.track.album.picture.url} style={trackImageStyle} alt="Okładka albumu"/>
            :
            "Okładki brak"
            }
            <span style={titleStyle}>
                {props.track.title}
            </span>
            <ReactAudioPlayer
            controls
            src={props.track.audioTrack.url ? props.track.audioTrack.url : null}
            style={audioplayer}/>
            <div style={dataContainerStyle}>
                <span>Album: {props.track.album.title} | Autor: {props.track.textAuthor} | Rok wydania: {props.track.album.yearOfRelease}</span>
            </div>
        </div>
    )
}

export default Player
