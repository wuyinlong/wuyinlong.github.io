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
}
