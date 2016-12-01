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
partition: function(arr, fn) {
      var result = [
      [],[]
      ]

      for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
      result[0].push(arr[i])
      } else {
      result[1].push(arr[i])
      }
      }

      return result
},
every: function(arr,fn){
    for(var i = 0; i < arr.length; i++) {

    if(!fn(arr[i],i,arr)){
      return false
    }
    }
    return true
},
fill: function (arr, value, star, end) {
      for (var i = 0; i < arr.length; i++) {

      if ((star == undefined) && (end == undefined)) {
          arr[i] = value

      } else {
        arr[star] = value
        arr[end - 1] = value
      }
      }
      return arr
},
flatten: function(arr) {
      var result=[]
      
      for (var i = 0; i < arr.length; i++) {
        result=result.concat(arr[i])
      }
        return result
},
flattenDeep: function(arr, n) {
    var result = []

    if (n == 0) {
      return arr
    }

    if (n == undefined) {
      n = len - 1
    } else {
      n = arr.length - n
    }

    for (var i = arr.length; i > n; i--) {
      arr.pop()
    }

    return result.concat(arr)
},
fromPairs: function(pairs) {
    var reslut = {}

    for (var i = 0; i < pairs.length; i++) {
      reslut[pairs[i][0]] = pairs[i][1]
    }
    return reslut
},
head: function(arr){
    return arr[0]
},
indexOf: function(arr,value,n){
    if (n == undefined) {
    n = 0
    }

    var reslut = 0
    for (var i = n; i < arr.length; i++) {
      if (arr[i] == value) {
      reslut = i
      }
    }
    return reslut
},
lastIndexOf: function(arr,value, n){
    var reslut 

    if (n == undefined) {
    n = 0
    }

    for (var i = arr.length-1; i >= n; i--) {
      if (arr[i] == value) {
      reslut = i
      }
    }
    return reslut
},
initial: function(arr){
    var reslut = []
    for (var i = 0; i < arr.length - 1; i++) {
      reslut.push(arr[i])
    }
    return reslut
},
forOwn: function(obj, iterator){
    for (var key in obj) {
     if (Object.prototype.hasOwnProperty.call(obj, key)) {
        console.log(key)
      }
    }
},
parseJson: function(string) {
  var json = string

  var i = 0 // 指针
  function parseJson(str) { // 指针每次都归零
    json = str
    i = 0
    return parse() // 后面的函数没项都会调用指针归零函数
  }

  function parse() { //Json.parse
    var currChar = json[i] // 指针所指的每一项

    if (currChar == '{') { // 指针指到'{'时代表该项为 Object
      return parseObject()
    }

    if (currChar == '[') { // 指针指到'['时代表该项为 Array
      return parseArray()
    }

    if (currChar == 'n') { // 指针指到'n'时代表该项为 null
      return parseNull()
    }

    if (currChar == 't') { // 指针指到't'时代表该项为 true
      return parseTrue()
    }

    if (currChar == 'f') { // 指针指到'f'时代表该项为 false
      return parseFalse()
    }

    if (isDigit(currChar)) { // 判断指针所指的是否是个 Number
      return parseNumber()
    }

    if (currChar == '"') { // 指针指到'"'时代表该项为 String
      return parseString()
    }


    function parseTrue() { //输出 true
      i += 4
      return true
    }

    function parseFalse() { // 输出 false
      i += 5
      return false
    }

    function parseArray() { // 输出 Array
      i++ // 指针此时是在'['上，++进入 Array 内部 
      var arr = []
      var value

      if (json[i + 1] == ']') { // Array 为空
        return arr
      }

      while (true) {
        value = parse()
        arr.push(value)
        if (json[i] == ',') { // 遍历 Array 中的每一项','如果是，就跳过
          i++
          continue
        }
        if (json[i] == ']') { // 遇到 ']' 就结束循环
          break
        }
      }
      i++ // 跳过 ']'
      return arr
    }

    function parseObject() { // 输出 Object
      var Newobject = {}
      var key
      var value

      if (json[i + 1] == '}') { // 空Object
        return Newobject
      }

      while (true) {
        key = parseString() //获取属性名- String
        i++ // 跳过冒号
        value = parse() // 获取属性值
        Newobject[key] = value // 属性赋值

        if (json[i] == '}') { // 遇到'}' 即Object结束
          break
        } else {
          i++
          continue
        }
      }
      i++ // 跳过'}'
      return Newobject
    }

    function parseString() { // 输出字符串
      var startIndex = i // 指针起始位置
      var endIndex = json.indexOf('"', startIndex) //结束位置，此处结束位置应该是末尾的引号
      var string = json.slice(startIndex + 1, endIndex) // 指针此时所指为引号，so,需要+1
      i = endIndex + 1 //此时i所指的位置为字符串结束的引号，+1再读取下一项，否则，会重复执行endIndex死循环
      return string
    }

    function parseNull() { //输出 Null
      i += 4
      return null
    }

    function parseNumber() { //输出数字
      var startIndex = i // 指针指向初始值
      var char // 储存 Number                 

      for (var j = startIndex;; j++) { // 未知数字 length 大小，所以写一个死循环 
        char = json[j]

        if (!isDigit(json[j])) { // 约束条件，当该项不是一个数字的时候就跳出循环 
          break
        }
      }
      var charall = json.slice(startIndex, j) //参见 String 
      i = j
      return parseInt(charall) // 此处也可写为 Number(charall)
    }

    function isDigit(char) { //判断是否是Number
      if (!char) { // 简单理解，如果指针调到','上，那就是undefined，无须执行
        return false
      }

      var charOfZero = '0'.charCodeAt(0) //获取0的 UTF-16 编码
      var charOfNine = '9'.charCodeAt(0) //获取0的 UTF-16 编码
      var charCode = char.charCodeAt(0) //获取 char 的 UTF-16 编码

      if ((charCode >= charOfZero) &&
        (charCode <= charOfNine)) { // 0 =< char >= 9
        return true
      } else {
        return false
      }
    }
  }
},
pull: function(arr, value){
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arguments.length; j++) {
      if (arr[i] == arguments[j]) {
        arr.splice(i, 1)
        i = 0
        break
      }
    }
  }
  return arr
},
}

