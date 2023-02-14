// ### JS中的操作语句：判断、循环

// #### 判断
let e = 10;
if (e <= 0) {
    console.log('hahaha');
} else if (e > 0 && e < 10) {
    console.log('yiyayi');
} else if (e == 10) {
    console.log('dui');
} else {
    console.log('lvlv');
}

//=================三元运算符：简单if / else 的特殊处理方式
//条件 ？ 条件成立处理的事情 : 不成立处理的事情;

/*
1.如果处理的事情比较多，我们用括号包起来，每一件事用逗号分隔
2.如果不需要处理事情，可以使用null/undefined占位
*/
let f = 20;
console.log(f >= 20 ? 'dui' : 'cuo');

let g = 10;
g > 0 && g < 20 ? (g++, console.log(g)) : null;
/* if(g > 0 && g < 200) {
    g++;
    console.log(g);
} 
*/

//=======================switch case ： 一个变量在不同值情况下的不同操作
//1.每一种case情况结束后最好都加上 break
//2.default等价于else ，以上都不成立干的事情
//3.每一种case 情况的比较用的都是 === “绝对相等”
let h = 10;
switch (h) {
    case 1:
        console.log('hh');
        break;
    case 5:
        console.log('ee');
        break;
    case 10:
        console.log('qq');
        break;
    default:
        console.log('ss');
}

//不加break，当前条件成立执行完成后，后面不论条件是否成立都要执行，直到遇到break为止 （不加break可以实现变量在某些值的情况下做相同的事情）