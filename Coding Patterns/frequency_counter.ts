const same = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    interface FrequencyCounter { [key: number]: number; }

    let frequencyCounter1: FrequencyCounter = {}
    let frequencyCounter2: FrequencyCounter = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        console.log(frequencyCounter1[val])
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        const numericKey = parseInt(key)
        if (!(numericKey ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[numericKey ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])
