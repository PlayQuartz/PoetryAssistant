import '../css/style.css'
import React, {useState, useEffect} from 'react'
import Rhymes from './Rhymes.js'
import Metre from './Metre.js'
import Alliteration from './Alliteration.js'

const Home = () => {

    const [dictionary, setDictionary] = useState(null)
    const [page, setPage] = useState(null)

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/dictionary.json`)
        .then(response => response.json())
        .then(data => {setDictionary(data); setPage(<Rhymes phonetic_dictionary={data}/>)})
    }, [])

    return (
        <div className='home-page'>

            <header>
                <img className='logo' src={`${process.env.PUBLIC_URL}/logo.jpg`} alt='logo' />
                <div className='menu-page'>
                    <div onClick={() => setPage(<Rhymes phonetic_dictionary={dictionary}/>)} className={`page ${page?.type?.name === 'Rhymes' ? 'selected' : ''}`}>Rhymes</div>
                    <div onClick={() => setPage(<Metre dictionary={dictionary}/>)} className={`page ${page?.type?.name === 'Meter' ? 'selected' : ''}`}>Metre</div>
                    <div onClick={() => setPage(<Alliteration dictionary={dictionary}/>)} className={`page ${page?.type?.name === 'Alliteration' ? 'selected' : ''}`} >Alliteration</div>
                </div>
            </header>
            <div className='banner'>Poetry Assistant</div>

            {page}
        </div>
    )
}

export default Home