import React, {useState} from 'react'
import '../css/style.css'
import {getMeter} from './Logic.js'

const Meter = ({dictionary}) => {

    const [searchSentence, setSearchSentence] = useState('')
    const [meterSequence, setMeterSequence] = useState(null)

    return (
        <div className='container'>

            <div className='information'>
                <div className='title'>Meter</div>
                <div className='description'>Find the meter of your sentence</div>
            </div>

            <div className='search-bar'>
                <input className='ipt' type='text' placeholder='Sentence' onClick={() => setMeterSequence(null)} onChange={(e) => {setSearchSentence(e.target.value);setMeterSequence(null)}} />
                <input className='btn' type='submit' onClick={() => {setMeterSequence(getMeter(searchSentence, dictionary))}} value='Search' />
            </div>

            <div className='words'>
                <div style={{gridTemplateColumns: `repeat(${meterSequence?.length || 0}, min-content)`}} className='sentence'>
                    {
                        meterSequence && meterSequence.map(item => (<div className='meter'>{item}</div>))
                    }
                                        {
                        (searchSentence && meterSequence) && searchSentence.replaceAll('.', '').replaceAll(',', '').split(' ').map(item => (<div>{item}</div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Meter