import React, {useState} from 'react'
import '../css/style.css'

const Alliteration = ({dictionary}) => {

    const [searchWord, setSearchWord] = useState('')
    const [alliterationWords, setAlliterationWords] = useState(null)

    const getPhonetic = (word) => {
        return dictionary[word];
    };

    const getAlliteration = () => {
        let word = searchWord.toLowerCase()
        let alliteration_word = new Set() 
        let dictionary_keys = Object.keys(dictionary)
        let word_phonetic = getPhonetic(word)
        if(!word_phonetic){
            return 'Word not found in the dictionary'
        }
        let word_first_phoneme = word_phonetic.split(' ')[0]
        
        for(let x = 0; x < dictionary_keys.length; x++){
            let current_word_phonetic = getPhonetic(dictionary_keys[x])
            if(current_word_phonetic){
                let current_word_first_phoneme = current_word_phonetic.split(' ')[0]
                if(current_word_first_phoneme === word_first_phoneme){
                    alliteration_word.add(dictionary_keys[x])
                }
            }
        }
        if(Array.from(alliteration_word).length === 0){
            return setAlliterationWords(false)
        }
        return setAlliterationWords(alliteration_word)
    }

    return (
        <div className='container'>

            <div className='information'>
                <div className='title'>Alliteration</div>
                <div className='description'>Find words that start with the same phoneme</div>
            </div>

            <div className='search-bar'>
                <input className='ipt' type='text' placeholder='Word' onChange={(e) => setSearchWord(e.target.value)} />
                <input className='btn' type='submit' onClick={getAlliteration} value='Search' />
            </div>

            <div className='words'>
                {
                    alliterationWords !== null ? alliterationWords !== false ? Array.from(alliterationWords).map((word, index) => (<div key={index} className='word'>{word}</div>)) : (<div>Not Found</div>) : <></>
                }
            </div>
        </div>
    )
}

export default Alliteration