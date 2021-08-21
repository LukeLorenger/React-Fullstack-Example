import React from 'react';
import '../../App.css';
import { ChatEngine } from 'react-chat-engine';

const { REACT_APP_PROJECTID, REACT_APP_USERNAME, REACT_APP_USERSECRET} = process.env

var projId = REACT_APP_PROJECTID
var userName = REACT_APP_USERNAME
var secret = REACT_APP_USERSECRET

function Home() {
    return (
        <ChatEngine
			projectID='b2e79a73-9fd7-4d45-9e65-06a70bbf3822'
			userName='firstTestUser'
			userSecret='123123'
		/>
    )
}

export default Home
