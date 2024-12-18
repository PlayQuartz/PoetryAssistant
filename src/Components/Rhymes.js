import React, {useState} from 'react'

const Rhymes = ({phonetic_dictionary}) => {

    const [searchWord, setSearchWord] = useState('')
    const [rhymingWords, setRhymingWords] = useState(null)

    const getRhymes = (searchWord, phonetic_dictionary) => {

        var word = searchWord.toLowerCase()
        var word_phonetic = phonetic_dictionary[word]
        var rhyming_words = []
        var dictionary_keys = Object.keys(phonetic_dictionary)

        if(!word_phonetic){
            return rhyming_words
        }

        word_phonetic = word_phonetic.split(' ')
        var word_phonetic_len = word_phonetic.length

        for(let x = 0; x < dictionary_keys.length; x++){

            var current_word = dictionary_keys[x]
            var current_word_phonetic = phonetic_dictionary[current_word]

            if(current_word){

                current_word_phonetic = current_word_phonetic.split(' ')
                var current_word_phonetic_len = current_word_phonetic.length

                for(let y = 1; y <= Math.min(current_word_phonetic_len, word_phonetic_len); y++){
                    if(current_word_phonetic[current_word_phonetic_len-y] === word_phonetic[word_phonetic_len-y]){
                        if(y >= 2){
                            if (current_word !== word){
                                rhyming_words.push(current_word)
                            }
                        }
                    }
                    else{
                        break
                    }
                }

            }

        }

        return rhyming_words
    }

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
                    rhymingWords !== null ? rhymingWords !== false ? Array.from(rhymingWords).map((word, index) => (<div key={index} className='word'>{word}</div>)) : (<div>Not Found</div>) : <></>
                }
            </div>
        </div>
    )
}

export default Rhymes