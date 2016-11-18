var WuYinLong = {
chunk: function(arr, n) {

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
compact: function(arr) {
      
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
difference: function(arr, other) {
      var newArr = []

      for (var i = 0; i < arr.length; i++) {
      if (arr[i] != other[i]) {
          newArr.push(arr[i])
      }
      }
      return newArr
},
drop: function(arr, n){
      var newArr = arr
      
      if(n == undefined){
            n = 1
        }
        
        newArr.splice(0,n)
        
        return newArr
},
dropRight: function(arr, n){
      var newArr = arr
      var len=newArr.length
      
      if(n == undefined){
          n = len-1
      }
      
      if(n>len){
          n=2*n
      }
      
      newArr.splice(len-n,n)
      return newArr
},
map: function(arr, fn) {
      var result = []

      for (i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i, arr))
      }

      return result
},
filter: function(arr, fn) {
        var newArr = []
        
        for (var i = 0; i < arr.length; i++) {
          
          if (fn(arr[i], i, arr)) {
              newArr.push(arr[i])
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

      for (var i = start; i<collection.length; i++) {
      result = reducer(result, collection[i])
      }

      return result
},

}

