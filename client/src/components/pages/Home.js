import React from 'react';
import '../../App.css';
import { ChatEngine } from 'react-chat-engine';

const { REACT_APP_PROJECTID, REACT_APP_USERNAME, REACT_APP_USERSECRET} = process.env

var projId = REACT_APP_PROJECTID
var userName = REACT_APP_USERNAME
var secret = REACT_APP_USERSECRET

function Home() {
    return (
        <h1>Home</h1>
    )
}

export default Home
