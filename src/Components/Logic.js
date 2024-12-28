const getRhymes = (search_word, phonetic_dictionary) => {

    var word = search_word.toLowerCase() // Convert word to lowercase to match phonetic_dictionary keys
    var word_phonetic = phonetic_dictionary[word] // Retrieve phonetic representation of the word
    var rhyming_words = {} // List to store rhyming words
    var dictionary_keys = Object.keys(phonetic_dictionary) // Get all words from phonetic_dictionary

    if(!word_phonetic){ // Return empty list if word is not in phonetic_dictionary
        return rhyming_words
    }
    word_phonetic = word_phonetic.split(' ') // Split word's phonetic into a list
    var word_phonetic_len = word_phonetic.length // Get number of phonemes in the word

    for(let x = 0; x < dictionary_keys.length; x++){ // Iterate through all words in phonetic_dictionary
        var current_word = dictionary_keys[x] // Current word being compared
        var current_word_phonetic = phonetic_dictionary[current_word].split(' ') // Split current word's phonetic into a list
        var current_word_phonetic_len = current_word_phonetic.length // Get number of phonemes in the current word
        for(let y = 1; y <= Math.min(current_word_phonetic_len, word_phonetic_len); y++){ // Compare phonemes from the end of both words
            if(current_word_phonetic[current_word_phonetic_len-y].replace(/[012]/g, '') === word_phonetic[word_phonetic_len-y].replace(/[012]/g, '')){ // Check if phonemes match
                if(y >= 2){ // Ensure at least two matching phonemes
                    if (current_word !== word){ // Exclude the search word itself
                        if(!rhyming_words[y]){
                            rhyming_words[y] = []
                        }
                        rhyming_words[y].push(current_word)
                    }
                }
            }
            else{
                break // Stop comparison if phonemes don't match
            }
        }
    }
    console.log(rhyming_words)
    return rhyming_words 
}


const getMetre = (search_sentence, phonetic_dictionary) => {
    var sentence = search_sentence.replaceAll('.', '').replaceAll(',', '').split(' ') // Clean the sentence by removing '.' and ',' and split it into individual words
    var metre = [] // List to store metre
    for (let x = 0; x < sentence.length; x++){ // Iterate through all words in the sentence
        var current_metre = '' // String to store metre for the current word
        var current_word = sentence[x].toLowerCase() // Convert word to lowercase to match phonetic_dictionary keys
        var current_word_phonetic = phonetic_dictionary[current_word] // Retrieve phonetic representation of the word
        if(current_word_phonetic){ // Check if the phonetic representation exists
            for (let y = 0; y < current_word_phonetic.length; y++){ // Iterate through the phonetic representation of the current word
                if(current_word_phonetic[y] in ['0','1','2']){ // Check if the current character in the phonetic is '0', '1', or '2'
                    current_metre += {'0':'´', '1': '˘', '2': '˘'}[current_word_phonetic[y]] // Map the phoneme ('0', '1', '2') to the corresponding metre symbol
                }
            }
        }
        metre.push(current_metre) // Add current metre to metre
    }
    return metre
}

const getAlliteration = (search_word, phonetic_dictionary) => {
    var word = search_word.toLowerCase() // Convert word to lowercase to match phonetic_dictionary keys
    var word_phonetic = phonetic_dictionary[word] // Retrieve phonetic representation of the word
    var alliteration_words = [] // List to store alliteration words
    var dictionary_keys = Object.keys(phonetic_dictionary) // Get all words from phonetic_dictionary
    if(!word_phonetic){ // Return empty list if word is not in phonetic_dictionary
        return alliteration_words
    }
    var word_first_phoneme = word_phonetic.split(' ')[0] // Get the first phoneme of the search word
    for (let x = 0; x < dictionary_keys.length; x++){ // Iterate through all words in phonetic_dictionary
        var current_word_phonetic = phonetic_dictionary[dictionary_keys[x]] // Retrieve the phonetic representation of the current word
        if(current_word_phonetic){ // Check if the phonetic representation exists
            var current_word_first_phoneme = current_word_phonetic.split(' ')[0] // Get the first phoneme of the current word
            if(current_word_first_phoneme === word_first_phoneme){ // Compare the first phoneme of the current word with the search word
                alliteration_words.push(dictionary_keys[x]) // Add the current word to the alliteration list
            }
        }
    }
    return alliteration_words
}

module.exports = {
    getRhymes,
    getMetre,
    getAlliteration
}

// +-- Test Program Logic without Interface --+ //

// const phoneticDictionary = require('../../public/dictionary.json');
// console.log(getRhymes('Shall', phoneticDictionary))
// console.log(getMetre("I wandered lonely as a cloud", phoneticDictionary).join(' '))
// console.log(getAlliteration('Feathers', phoneticDictionary))