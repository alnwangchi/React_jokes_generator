import React, {useState, useEffect} from 'react';

import Button from '@mui/material/Button';

import {RANDOM_JOKES_API_URL} from './../../global/constants.js'


const QuestionBox = () => {
  const [joke, setJoke] = useState('')

  const getJokes = async () => {
    const res = await fetch(RANDOM_JOKES_API_URL)
    const data = await res.json()
    // console.log(data);
    setJoke(data.value.joke)
  }

  useEffect(() => {
    getJokes()
  }, [])
  
  return (
    <div className="question_box">
      <h1>Allen's Joke Generator !!!</h1>
      {/* <p>{joke === '' ? 'No Jokes Here Now!' : joke }</p> */}
      <p dangerouslySetInnerHTML={{__html: joke}} />
      <Button variant="contained" onClick={getJokes}>Contained</Button>
    </div>
  );
}

export default QuestionBox;
