var WuYinLong = {
    chunk: function(array, n) {

        var l = Math.ceil(array.length / n)

        var result = new Array(l);

        for (var i = 0; i < l; i++) {
            result[i] = []
        }

        for (var i = 0; i < array.length; i++) {
            result[parseInt(i / n)][i % n] = array[i]
        }

        return result
    },
    compact: function(array) {

        var Newarray = []

        for (i = 0; i < array.length; i++) {

            if (!!array[i] == false) {
                continue 
            } else {

                Newarray.push(array[i])

            }

        }
        return Newarray
    },
    concat: function() {
        var newArr = []

        for (var i = 0; i < arguments.length; i++) {

            if (arguments[i][0] == undefined) {
                newArr.push(arguments[i])
            } else {

                for (var j = 0; j < arguments[i].length; j++) {
                    newArr.push(arguments[i][j])
                }
            }
        }
        return newArr
    },
    difference: function(array, other) {
        var newArr = []

        for (var i = 0; i < array.length; i++) {
            if (array[i] != other[i]) {
                newArr.push(array[i])
            }
        }
        return newArr
    },
    drop: function(array, n) {
        var newArr = array

        if (n == undefined) {
            n = 1
        }

        newArr.splice(0, n)

        return newArr
    },
    dropRight: function(array, n) {
        var newArr = array
        var len = newArr.length

        if (n == undefined) {
            n = len - 2
        }

        if (n > len) {
            n = length
        }

        newArr.splice(len - n, n)
        return newArr
    },
    map: function(array, fn) {
        var result = []

        for (i = 0; i < array.length; i++) {
            result.push(fn(array[i], i, array))
        }

        return result
    },
    filter: function(array, fn) {
        var newArr = []

        for (var i = 0; i < array.length; i++) {

            if (fn(array[i], i, array)) {
                newArr.push(array[i])
            }
        }
        return newArr
    },
    reduce: function(collection, reducer, initial) {
        var start = 0
        if (initial == undefined) {
            initial = collection[0]
            start = 1
        }

        var result = initial

        for (var i = start; i < collection.length; i++) {
            result = reducer(result, collection[i])
        }

        return result
    },
}
