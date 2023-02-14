let person = {
    name: '王哈哈',
    age: 40,
    height: '185CM',
    weight: '50KG',
    1: 100
};
// 删除属性
// =>真删除：把属性彻底删掉
delete person['1'];
// =>假删除：属性还在，值为空
person.weight = null;
console.log(person);
// 设置属性名属性值
person.friend = 'ty';
console.log(person.friend);
// 获取属性名对应的属性值
// 对象.属性名
// 对象['属性名'] 属性名是数字或者字符串格式
// 如果当前属性名不存在，默认的属性值是undefined
//如果属性名是数字，则不能使用点的方式获取属性值
console.log(person.name);
console.log(person['age']);
console.log(person.sex);//undefined
console.log(person['1']);
//console.log(person.1)//报错：Uncaught SyntaxError: （语法错误）missing ) after argument list

// 数组是特殊的对象
// 1.我们中括号设置的是属性值，它的属性名是默认生成的数字，从零开始递增，而且这个数字代表每一项的位置，我们把它叫做“索引” => 从零开始，连续递增，代表每一项位置的数字属性名
// 2.天生默认一个属性名，存储数组的长度

let ary = [12, '哈哈', true, 13];
console.log(ary);
console.log(ary.length);
console.log(ary['length']);
console.log(ary[1]);
//第一项索引 0 ， 最后一项索引ary.length - 1
console.log(ary[ary.length - 1]);

//向数组末尾增加内容
ary[ary.length] = 100;
console.log(ary);


//JS中数据类型检测

/*
基于typeof检测出来的结果 
 1.首先是一个字符串（在浏览器控制台里，蓝色代表数字，黑色代表字符串）
 2.字符串中包含对应的类型
 局限性
    1.typeof null => "object" 但是null并不是对象
    2.基于typeof无法细分出当前值是普通对象还是数组对象等，因为只要是对象数据类型，返回的结果都是"object" 
 */
console.log(typeof 1);
let d = NaN;
console.log(typeof d);// NaN => 'number'类型

console.log(typeof typeof typeof []);// => 'string'类型
// typeof [] => "object"
// typeof "object" => "string"
//因为typeof检测的结果都是字符串，所以只要两个及以上同时检测，最后结果必然是 "string"


