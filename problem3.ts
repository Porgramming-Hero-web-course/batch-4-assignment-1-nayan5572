{
// Problem 3:
// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input

function countWordOccurrences(sentence: string, word: string): number {
    const lowerSentence = sentence.toLocaleLowerCase();
    const lowerWord = word.toLocaleLowerCase();


    // split the sentence
    const words = lowerSentence.split(" ");
    const occurrences = words.filter(w => w === lowerWord).length;

    return occurrences;
}
// sample Input:
console.log(countWordOccurrences("I love typescript", "typescript"));












}