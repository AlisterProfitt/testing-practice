function analyzeArray(array) {
    function findAverage(array) {
        const arraySum = array.reduce((prev, curr) => prev += curr, 0);
        return arraySum / array.length;
    }
    
    function findMinimum(array) {
        let minimum = Infinity;
        array.forEach(element => {
            if (element < minimum) {
                minimum = element;
            }
        });

        return minimum;
    }

    function findMaximum(array) {
        let maximum = -Infinity;
        array.forEach(element => {
            if (element > maximum) {
                maximum = element;
            }
        });

        return maximum;
    }

    return {
        average: findAverage(array),
        min: findMinimum(array),
        max: findMaximum(array),
        length: array.length,
    }
}

module.exports = analyzeArray;