import React, {useState} from 'react'
import '../css/style.css'

const Meter = ({dictionary}) => {

    const [searchSentence, setSearchSentence] = useState('')
    const [meterSequence, setMeterSequence] = useState(null)

    const getMeter = (searchSentence, phonetic_dictionary) => {
        var sentence = searchSentence.replaceAll('.', '').replaceAll(',', '').split(' ')
        var meter = []
        for (let x = 0; x < sentence.length; x++){
            var current_meter = ''
            var current_word = sentence[x].toLowerCase()
            var current_word_phonetic = phonetic_dictionary[current_word]
            for (let y = 0; y < current_word_phonetic.length; y++){
                if(current_word_phonetic[y] in ['0','1','2']){
                    current_meter += {'0':'´', '1': '˘', '2': '˘'}[current_word_phonetic[y]]
                }
            }
            meter.push(current_meter)
        }
        return meter
    }

    return (
        <div className='container'>

            <div className='information'>
                <div className='title'>Meter</div>
                <div className='description'>Find the meter of your sentence</div>
            </div>

            <div className='search-bar'>
                <input className='ipt' type='text' placeholder='Sentence' onClick={() => setMeterSequence(null)} onChange={(e) => setSearchSentence(e.target.value)} />
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