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
                continue //结束单次循环
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
    partition: function(array, fn) {
        var result = [
            [],
            []
        ]

        for (var i = 0; i < array.length; i++) {
            if (fn(array[i], i, array)) {
                result[0].push(array[i])
            } else {
                result[1].push(array[i])
            }
        }

        return result
    },
    every: function(array, fn) {
        for (var i = 0; i < array.length; i++) {

            if (!fn(array[i], i, array)) {
                return false
            }
        }
        return true
    },
    fill: function(array, value, star, end) {
        for (var i = 0; i < array.length; i++) {

            if ((star == undefined) && (end == undefined)) {
                array[i] = value

            } else {
                array[star] = value
                array[end - 1] = value
            }
        }
        return array
    },
    flatten: function(array) {
        var result = []

        for (var i = 0; i < array.length; i++) {
            result = result.concat(array[i])
        }
        return result
    },
    flattenDeep: function(array, n) {
        var result = new Array()
        debugger
        for (var i = 0; i < array.length; i++) {
            if (!(Array.isArray(array[i]))) {
                result.push(array[i])
            } else {
                for (var j = 0; j < array[i].length; j++) {
                    result.push(array[i][j])
                }
            }
        }
        for (var k = 0; k < result.length; k++) {
            if (!(Array.isArray(result[k]))) {
                continue
            } else {
                return this.flattenDeep(result)
            }
        }
        return result
    },
    fromPairs: function(pairs) {
        var reslut = {}

        for (var i = 0; i < pairs.length; i++) {
            reslut[pairs[i][0]] = pairs[i][1]
        }
        return reslut
    },
    head: function(array) {
        return array[0]
    },
    join: function(array, sparator) {
        var result = ""
        for (var i = 0; i < array.length - 1; i++) {
            result += arrayay[i] + n
        }
        return result + array[array.length - 1]
    },
    last: function(array) {
        return array[array.length - 1]
    }
    nth: function(array, n) {
        if (n < 0) {
            n = array.length + n
        }
        return array[n]
    },
    indexOf: function(array, value, n) {
        if (n == undefined) {
            n = 0
        }
        var reslut = 0
        for (var i = n; i < array.length; i++) {
            if (array[i] == value) {
                reslut = i
                break
            }
        }
        return reslut
    },
    lastIndexOf: function(array, value, n) {
        var reslut

        if (n == undefined) {
            n = 0
        }

        for (var i = array.length - 1; i >= n; i--) {
            if (array[i] == value) {
                reslut = i
            }
        }
        return reslut
    },
    initial: function(array) {
        var reslut = []
        for (var i = 0; i < array.length - 1; i++) {
            reslut.push(array[i])
        }
        return reslut
    },
    forOwn: function(obj, iterator) {
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
    pull: function(array, value) {
        for (var i = 0; i < array.length; i++) {
            for (var j = 1; j < arguments.length; j++) {
                if (array[i] == arguments[j]) {
                    array.splice(i, 1)
                    i = 0
                    break
                }
            }
        }
        return array
    },
    // 过滤对象中的值
    pullAll: function(array, value) {
        for (var i = 0; i < value.length; i++) {
            for (var j = 1; j < array.length; j++) {
                if (value[i] == array[j]) {
                    array.splice(j, 1)
                }
            }
        }
        return array
    },
    //倒叙数组
    reverse: function(array) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            result.unshift(array[i])
        }
        return result
    },
    // 二进制索引
    sortedIndex: function(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i
            }
        }
    },

    sortedIndexOf: function(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i
            }
        }
    },
    sortedLastIndex: function(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (value >= array[i] && value < array[i + 1]) {
                return i + 1
            }
        }
    },
    sortedLastIndexOf: function(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (value >= array[i] && value < array[i + 1]) {
                return i
            }
        }
    },
    sortedUniq: function(array) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            if (!(array[i] == array[i + 1])) {
                result.push(array[i])
            }
        }
        return result
    },

}
