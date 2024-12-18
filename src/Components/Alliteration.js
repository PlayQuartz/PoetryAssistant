import React, {useState} from 'react'
import '../css/style.css'
import {getAlliteration} from './Logic.js'

const Alliteration = ({dictionary}) => {

    const [searchWord, setSearchWord] = useState('')
    const [alliterationWords, setAlliterationWords] = useState(null)

    return (
        <div className='container'>

            <div className='information'>
                <div className='title'>Alliteration</div>
                <div className='description'>Find words that start with the same phoneme</div>
            </div>

            <div className='search-bar'>
                <input className='ipt' type='text' placeholder='Word' onChange={(e) => setSearchWord(e.target.value)} />
                <input className='btn' type='submit' onClick={() => setAlliterationWords(getAlliteration(searchWord, dictionary))} value='Search' />
            </div>

            <div className='words'>
                {
                    alliterationWords !== null ? alliterationWords.length > 0 ? Array.from(alliterationWords).map((word, index) => (<div key={index} className='word'>{word}</div>)) : (<div>Not Found</div>) : <></>
                }
            </div>
        </div>
    )
}

export default Alliteration