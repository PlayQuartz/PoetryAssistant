import '../css/style.css'
import React, {useState, useEffect} from 'react'
import Rhymes from './Rhymes.js'
import Meter from './Meter.js'

const Home = () => {

    const [dictionary, setDictionary] = useState(null)

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/dictionary.json`)
        .then(response => response.json())
        .then(data => setDictionary(data))
    }, [])

    return (
        <div className='home-page'>

            <header>
                <img className='logo' src={`${process.env.PUBLIC_URL}/logo.jpg`} />
                <div className='menu-page'>
                    <div className='page'>Rhymes</div>
                    <div className='page'>Meter</div>
                    <div className='page'>Alliteration</div>
                </div>
            </header>
            <div className='banner'>Poetry Assistant</div>

            <Meter dictionary={dictionary}/>
        </div>
    )
}

export default Home