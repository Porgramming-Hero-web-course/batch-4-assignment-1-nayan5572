{
   
    // Problem 2: 
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements

    const removeDuplicates = (numArray: number[]): number[] => {
        const uniqueArray: number[] = [];
        for(const num of numArray){
            if (!uniqueArray.includes(num)){
                uniqueArray.push(num);
            }
        }
        return uniqueArray;
    }

    const outputUniqArray = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(outputUniqArray);




}