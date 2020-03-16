// var str = 'abcabcbb'
// var len = str.length

// 输出一个字符串里包含的所有字符串
// for(var i=0;i<=len;i++){
//     for(var j=i+1;j<=len;j++){
//         console.log(str.slice(i,j))
//     }
// }
// 输出不含有重复字符的最长字符串长度

//双重循环
// let maxStr = ''
// for(var i=0;i<=len;i++){
//     for(var j=i+1;j<=len;j++){
//         let currentStr = str.slice(i,j);
//         let currentStrArr = currentStr.split('')
//         let setArr = Array.from(new Set(currentStrArr))
//         if(currentStrArr.length === setArr.length){
//             // console.log(currentStr)
//             maxStr = currentStr.length >= maxStr.length ? currentStr : maxStr
//         }
//     }
// }

// console.log(maxStr.length)

//队列
// var lengthOfLongestSubstring = function(s) {
//     var res = 0,
//         i = 0;
//     var temp = [];
//     while(i < s.length) {
//         if(temp.indexOf(s[i]) === -1) {
//             temp.push(s[i]);
//         } else {
//             temp.shift();
//             continue;
//         }
//         res = Math.max(res, temp.length);
//         i++;
//     }
//     return res;
// };

//两个有序数组的中位数
// var nums1 = [1,2,3,6]
// var nums2 = [3,4]
// var findMedianSortedArrays = function(nums1, nums2) {
//     // 首先合并两个数组
//     var arr = nums1.concat(nums2)
//     let newArr = Array.from(new Set(arr))
//     newArr.sort(function(a,b){ return a-b; })
//     let mid = 0;
//     let len = newArr.length;
//     if(len % 2 === 0){
//         mid = (newArr[len/2 - 1] + newArr[len/2])/2
//     }else{
//         mid = newArr[(len-1)/2]
//     }
//     return mid
// };

// console.log(findMedianSortedArrays(nums1,nums2))

//获取几个字符串最长的公共字符串
// var arr = ["floabcor", "floabcwer", "floabw"];
// var arr = ['a','a']
// var arr = ["c","acc","ccc"]

// var test = strs => {
//   let arr = strs;
//   let maxStr = "";
//   if (arr.length === 0) {
//     return maxStr;
//   }
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   for (let j = 1; j <= arr[0].length; j++) {
//     var commonStr = arr[0].slice(0, j);
//     let flag = true;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i].slice(0,j) !== commonStr) {
//         flag = false;
//       }
//     }
//     if (!flag) {
//       maxStr = maxStr;
//     } else if (commonStr.length >= maxStr.length) {
//       maxStr = commonStr;
//     }
//   }
//   return maxStr;
// };

// console.log(test(arr));

// 寻找二数之和等于第三数的组合（超时）
// var arr = [0,-4,-1,-4,-2,-3,2]

// var threeSum = function(nums) {
//     var list = [];
//     nums = nums.sort(function(a,b){ return a-b; })
//     for(let a=0;a<nums.length-1;a++){
//         if(nums[a] >= 0){
//             continue
//         }
//         for(let b=a+1;b<nums.length-1;b++){
//             let arr = nums.slice(0)
//             let thirdNum = parseInt(-(nums[a]+nums[b]))
//             arr.splice(a,1)
//             arr.splice(b-1,1)
//             if(arr.indexOf(thirdNum) === -1){
//                 continue
//             }
//             let tempArr = [nums[a],nums[b],thirdNum].sort(function(a,b){ return a-b; })
//             let filterArr = list.filter(item => item[0] === tempArr[0] && item[1] === tempArr[1] && item[2] === tempArr[2])
//             if(filterArr.length === 0){
//                 list.push(tempArr)
//             }
//         }
//     }
//     return list
// };

// console.log(threeSum(arr))


// 68ms 通过遍历过程中改变数组，重置索引的方法
// var str = "(])["
// var str = "{[]}"
// var isValid = function(s) {
//     let map = {
//         "(": 0,
//         "[": 1,
//         "{": 2,
//         "}": 3,
//         "]": 4,
//         ")": 5
//     }
//     if (s.length % 2 !== 0 || map[s[0]] > 2) {
//         return false
//     }
//     let arr = []
//     for(let i=0;i<s.length;i++){
//         if(s[i] in map){
//             arr.push(map[s[i]])
//         }
//     }

//     var resetA = (a) => {
//         if(a>2){
//             a = a - 1
//         }else{
//             a = -1 //每一次遍历完a会加一，置a为0
//         }
//         return a
//     }

//     var fun = (arr) => {
//         for(let a=0;a<arr.length;a++){
//             if((arr[a]+arr[a+1]) === 5 && arr[a] < arr[a+1] && a<arr.length-1){
//                 arr.splice(a,2)
//                 a = resetA(a) // 重置索引
//             }
//             if((arr[a]+arr[a-1]) === 5 && arr[a] > arr[a-1] && a>0){
//                 arr.splice(a-1,2)
//                 a = resetA(a)
//             }
//         }   
//     }
//     fun(arr)
//     return arr.length === 0
// };

// console.log(isValid(str))


// 输入整数n，输出n个不同的整数数组，且这些数相加为0

// var n = 3

// var sumZero = function(n) {
//     let arr = [];
//     let sum = 0
//     for(let i=1;i<n;i++){
//         arr.push(i)
//         sum+=i
//     }
//     arr.push(-sum)
//     return arr
// };

// console.log(sumZero(n))


// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
// n = 3
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
// // n = 2
// [
//     "(())",
//     "()()"
// ]

// var n = 3
// var generateParenthesis = function(n) {
//     let arr = []
//     for(let i=0;i<n-2;i++){
//         str = '(' + '' + ')'
//         if(arr.includes(str)) continue
//         arr.push(str)
//     }

//     return arr
// };

// console.log(generateParenthesis(n))


//字符串单词翻转
// hello world => world hello

// var s = 'i am     sb'
// var reverseWords = function(s) {
//     let arr = s.split(" ").filter(item => item)
//     return arr.reverse().join(" ")
// };
// console.log(reverseWords(s))


// 移除有序数组中的重复项,返回当前数组长度

// var nums = [1,1,2,2,2,3]
// var nums = [1,1]
// var removeDuplicates = function(nums) {
//     for(let i=0;i<nums.length;){
//         if(nums[i] === nums[i-1]){
//             nums.splice(i,1)
//         }else{
//             i++
//         }
//     }
//     return nums
// };

// console.log(removeDuplicates(nums))


//实现strStr()方法
// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 示例 1:

// 输入: haystack = "hello", needle = "ll"
// 输出: 2

// var haystack = 'hello'
// var needle = 'll'

// var haystack = ''
// var needle = ''
// var strStr = function(haystack, needle) {
//     let index = -1;
//     if(haystack.length === 0 && needle.length === 0){
//         return 0
//     }
//     for(let i=0;i<haystack.length;i++){
//         if(haystack.substr(i,needle.length) === needle){
//             index = i
//             break
//         }
//     }
//     return index
// };

// console.log(strStr(haystack, needle))


// 超时
// 实现除法返回商
// 10 3 => 3
// 7 -3 => -2
// var dividend = -2147483648
// var divisor = 2
// var divide = function(dividend, divisor) {
//     if(divisor === 0){
//         return '被除数不能为0'
//     }
//     let shang;
//     let i = 0;
//     let j = 0;
//     if(dividend*divisor < 0){
//         if(dividend < 0){
//             while (divisor*i >= dividend){
//                 shang = i
//                 i--
//             }
//         }else{
//             while (divisor*i <= dividend){
//                 shang = i
//                 i--
//             }
//         }

//     }else{
//         if(dividend < 0){
//             while (divisor*j >= dividend){
//                 shang = j
//                 j++
//             }
//         }else{
//             while (divisor*j <= dividend){
//                 shang = j
//                 j++
//             }
//         }

//     }
//     return  (shang > 2147483647 || shang < -2147483648) ? 2147483647 : shang
// };

// console.log(divide(dividend,divisor))


// 输入：
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// 输出：[0,9]

// const s = "wordgoodgoodgoodbestword"
// const words = ["word","good","best","word"]
// var findSubstring = function(s, words) {
//     if(s.length === 0 || words.length === 0){
//         return []
//     }
//     let wordLen = words[0].length
//     let arr = []
//     for(let i=0;i<s.length-wordLen+1;i++){ 
//         let str = s.substr(i,wordLen)
//         let index0 = words.indexOf(str)
//         var fun = (currentStr,currentWords) => {
//             let flag = true
//             for(let j=0;j<currentWords.length;j++){
//                 combineStr += words[j]
//                 if(s.indexOf(combineStr) === -1){
//                     flag = false
//                     break
//                 }else{
//                     currentWords.splice(j,1)
//                     arr.push(words.indexOf(combineStr))
//                 }
//             }
//             flag && currentWords.length > 0 ? fun(currentWords)
//         }
//         if(index0 > -1){
//             words.splice(index0,1)
//             let combineStr =  str
//             arr.push(i)
//             for(let j=0;j<words.length;j++){
//                 combineStr += words[j]
//                 if(s.indexOf(combineStr) === -1){
//                     flag = false
//                     break
//                 }else{
//                     arr.push(words.indexOf(combineStr))
//                 }
//             }
//             break
//         }
//     }
//     return arr 
// };
// console.log(findSubstring(s,words))



// let a = [1,2,3]
// a.join = a.shift
// console.log(a)
// console.log(a == 1 && a == 2 && a == 3)


// var a = 1;
// var a = 2;
// console.log(a)
// const b = {
//     age:10
// }
// b.age = 20
// console.log(b.age)



// var a = [];
// for(var i=0;i<10;i++){
//     a[i] = (function (j) {
//         return function() {
//             console.log(j);
//         }
//     })(i)
// }

// console.log(a[6]())

// var a = 1
// if(++a === 2){
//     console.log(a)
//     console.log('')
// }else{
//     console.log('1111')
// }