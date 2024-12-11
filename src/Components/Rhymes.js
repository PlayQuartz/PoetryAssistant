import React, {useState} from 'react'

const Rhymes = ({dictionary}) => {

    const [searchWord, setSearchWord] = useState('')
    const [rhymingWords, setRhymingWords] = useState(null)

    const getPhonetic = (word) => {
        return dictionary[word];
    };

    const getRhymes = () => {
        let word = searchWord.toLowerCase()
        let dictionary_keys = Object.keys(dictionary)
        let rhyming_words = new Set()
        let word_phonetic = getPhonetic(word)
        if(!word_phonetic){
            return console.log('Not Found')
        }
        word_phonetic = getPhonetic(word).split(' ')
        let word_phonetic_len = word_phonetic.length

        for(let x = 0; x < dictionary_keys.length; x++){
            let current_word = dictionary_keys[x]
            let current_word_phonetic = getPhonetic(current_word)
            if(current_word_phonetic){
                current_word_phonetic = getPhonetic(current_word).split(' ')
                
                let current_word_phonetic_len = current_word_phonetic.length
                let word_position = word_phonetic_len-1
                for(let y = current_word_phonetic_len-1; y >= (word_phonetic_len >= current_word_phonetic_len ? 0 : current_word_phonetic_len-word_phonetic_len); y--){
                    if(current_word_phonetic[y] === word_phonetic[word_position]){
                        if(word_phonetic_len-word_position >= 2){
                            if(current_word !== word){
                                rhyming_words.add(current_word)
                            }
                        }
                    }
                    else{
                        break
                    }
                    word_position--
                }
            }
        }
        setRhymingWords(rhyming_words)
        return rhyming_words
    }

    return (
        <div className='rhymes-container'>
            <div className='search-bar'>
                <input className='rhymes-ipt' type='text' onChange={(e) => setSearchWord(e.target.value)} />
                <input className='rhymes-btn' type='submit' onClick={getRhymes} value='Find Rhymes' />
            </div>

            <div className='rhyming-words'>
                {
                    rhymingWords && Array.from(rhymingWords).map(word => (<div>{word}</div>))
                }
            </div>
        </div>
    )
}

export default Rhymes