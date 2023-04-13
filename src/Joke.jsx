import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'



export default function Joke() {
    const [punchline, setPunchline] = useState('')
    const [joke, setJoke] = useState(null)
    useEffect(() => {
        axios.get("https://official-joke-api.appspot.com/jokes/random")
            .then(response => {
                setJoke(response.data)

            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const handleClick = () => {
        setPunchline(joke.punchline)
    }

    return (
        <div>

            <div className='jokeStyle'>{joke ? joke.setup : "Loading Joke..."}</div>
            <div className='result' onClick={handleClick}>{punchline ? punchline : "Click for Answer"}</div>

        </div>
    )
}
