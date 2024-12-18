import React, {useState} from 'react'
import {getRhymes} from './Logic.js'

const Rhymes = ({phonetic_dictionary}) => {

    const [searchWord, setSearchWord] = useState('')
    const [rhymingWords, setRhymingWords] = useState(null)

    return (
        <div className='container'>

            <div className='information'>
                <div className='title'>Rhymes</div>
                <div className='description'>Find rhymes of a word</div>
            </div>

            <div className='search-bar'>
                <input className='ipt' type='text' placeholder='Word' onChange={(e) => setSearchWord(e.target.value)} />
                <input className='btn' type='submit' onClick={() => {setRhymingWords(getRhymes(searchWord, phonetic_dictionary))}} value='Search' />
            </div>

            <div className='words'>
                {
                    rhymingWords !== null ? rhymingWords.length > 0 ? Array.from(rhymingWords).map((word, index) => (<div key={index} className='word'>{word}</div>)) : (<div>Not Found</div>) : <></>
                }
            </div>
        </div>
    )
}

export default Rhymes