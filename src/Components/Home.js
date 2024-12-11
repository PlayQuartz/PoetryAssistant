import '../css/style.css'
import React, {useState, useEffect} from 'react'
import Rhymes from './Rhymes.js'

const Home = () => {

    const [dictionary, setDictionary] = useState(null)

    useEffect(() => {
        fetch('/dictionary.json')
        .then(response => response.json())
        .then(data => setDictionary(data))
    }, [])

    return (
        <div className='home-page'>
            <Rhymes dictionary={dictionary}/>
        </div>
    )
}

export default Home