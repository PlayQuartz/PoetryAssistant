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

const getMeter = (searchSentence, phonetic_dictionary) => {
    var sentence = searchSentence.replaceAll('.', '').replaceAll(',', '').split(' ')
    var meter = []
    for (let x = 0; x < sentence.length; x++){
        var current_meter = ''
        var current_word = sentence[x].toLowerCase()
        var current_word_phonetic = phonetic_dictionary[current_word]
        if(current_word_phonetic){
            for (let y = 0; y < current_word_phonetic.length; y++){
                if(current_word_phonetic[y] in ['0','1','2']){
                    current_meter += {'0':'´', '1': '˘', '2': '˘'}[current_word_phonetic[y]]
                }
            }
        }
        meter.push(current_meter)
    }
    return meter
}

const getAlliteration = (searchWord, phonetic_dictionary) => {
    var word = searchWord.toLowerCase()
    var word_phonetic = phonetic_dictionary[word]
    var alliteration_words = []
    var dictionary_keys = Object.keys(phonetic_dictionary)
    if(!word_phonetic){
        return alliteration_words
    }
    var word_first_phoneme = word_phonetic.split(' ')[0]
    for (let x = 0; x < dictionary_keys.length; x++){
        var current_word_phonetic = phonetic_dictionary[dictionary_keys[x]]
        if(current_word_phonetic){
            var current_word_first_phoneme = current_word_phonetic.split(' ')[0]
            if(current_word_first_phoneme === word_first_phoneme){
                alliteration_words.push(dictionary_keys[x])
            }
        }
    }
    return alliteration_words
}

module.exports = {
    getRhymes,
    getMeter,
    getAlliteration
}

// +-- Test Program Logic without Interface --+ //

// const phoneticDictionary = require('../../public/dictionary.json');
// console.log(getRhymes('Cat', phoneticDictionary))
// console.log(getMeter("Shall I compare thee to a summer's day", phoneticDictionary).join(' '))