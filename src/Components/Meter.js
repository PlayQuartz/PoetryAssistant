import React, {useState} from 'react'
import '../css/style.css'

const Meter = ({dictionary}) => {

    const [searchSentence, setSearchSentence] = useState('')
    const [meterSequence, setMeterSequence] = useState(null)

    const getPhonetic = (word) => {
        return dictionary[word];
    };

    const getMeter = () => {
        let sentence_list = searchSentence.replaceAll('.', '').replaceAll(',', '').split(' ')
        let meter_sentence = []
        for(let word in sentence_list){
            let meter = ' '
            let lower_case_word = sentence_list[word].toLowerCase()
            let phonetic_word = getPhonetic(lower_case_word)
            for(let c in phonetic_word){
                if(phonetic_word[c] in ['0','1','2']){
                    meter+= {'0':'´', '1': '˘', '2': '˘'}[phonetic_word[c]]
                }
            }
            meter_sentence.push(meter)
        }
        console.log(sentence_list)
        return setMeterSequence(meter_sentence)
    } 

    return (
        <div className='container'>

            <div className='information'>
                <div className='title'>Meter</div>
                <div className='description'>Find the meter of your sentence</div>
            </div>

            <div className='search-bar'>
                <input className='ipt' type='text' placeholder='Sentence' onClick={() => setMeterSequence(null)} onChange={(e) => setSearchSentence(e.target.value)} />
                <input className='btn' type='submit' onClick={getMeter} value='Search' />
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