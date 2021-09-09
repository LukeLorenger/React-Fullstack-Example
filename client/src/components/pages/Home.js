import React from 'react';
import '../../App.css';
import Cards from '../Cards';

const { REACT_APP_PROJECTID, REACT_APP_USERNAME, REACT_APP_USERSECRET} = process.env

var projId = REACT_APP_PROJECTID
var userName = REACT_APP_USERNAME
var secret = REACT_APP_USERSECRET

function Home() {
    return (
        
        <Cards />
        
    )
}

export default Home
