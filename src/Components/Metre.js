import React, {useState} from 'react'
import '../css/style.css'
import {getMetre} from './Logic.js'

const Meter = ({dictionary}) => {

    const [searchSentence, setSearchSentence] = useState('')
    const [metreSequence, setMetreSequence] = useState(null)

    return (
        <div className='container'>

            <div className='information'>
                <div className='title'>Metre</div>
                <div className='description'>Find the metre of your sentence</div>
            </div>

            <div className='search-bar'>
                <input className='ipt' type='text' placeholder='Sentence' onClick={() => setMetreSequence(null)} onChange={(e) => {setSearchSentence(e.target.value);setMetreSequence(null)}} />
                <input className='btn' type='submit' onClick={() => {setMetreSequence(getMetre(searchSentence, dictionary))}} value='Search' />
            </div>

            <div className='words'>
                <div style={{gridTemplateColumns: `repeat(${metreSequence?.length || 0}, min-content)`}} className='sentence'>
                    {
                        metreSequence && metreSequence.map(item => (<div className='meter'>{item}</div>))
                    }
                                        {
                        (searchSentence && metreSequence) && searchSentence.replaceAll('.', '').replaceAll(',', '').split(' ').map(item => (<div>{item}</div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Meter