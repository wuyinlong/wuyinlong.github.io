var WuYinLong{
chunk: function chunk(arr, n) {

      var l = Math.ceil(arr.length / n)

      var result = new Array(l);

      for (var i = 0; i < l; i++) {
        result[i] = []
      }

      for (var i = 0; i < arr.length; i++) {
        result[parseInt(i / n)][i % n] = arr[i]
      }

      return result
},
compact: function compact(arr) {
      
        var Newarr = []

        for (i = 0; i < arr.length; i++) {

        if (!!arr[i] == false) {
        continue //结束单次循环
        } else {
        Newarr.push(arr[i])
        }

        }
        return Newarr
},
}

