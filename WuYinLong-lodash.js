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
    }

}
