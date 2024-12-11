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
            let meter = ''
            let lower_case_word = sentence_list[word].toLowerCase()
            let phonetic_word = getPhonetic(lower_case_word)
            for(let c in phonetic_word){
                if(phonetic_word[c] in ['0','1','2']){
                    meter+= phonetic_word[c]
                }
            }
            meter_sentence.push(meter)
        }
        return setMeterSequence(meter_sentence)
    } 

    return (
        <div className='rhymes-container'>
            <div className='search-bar'>
                <input className='rhymes-ipt' type='text' onChange={(e) => setSearchSentence(e.target.value)} />
                <input className='rhymes-btn' type='submit' onClick={getMeter} value='Search' />
            </div>

            <div className='rhyming-words'>
                {
                    meterSequence && meterSequence
                }
            </div>
        </div>
    )
}

export default Meter