'use strict';

// join -> 배열을 문자열로 
{
    const fruits = ['apple', 'banana', 'peach'];
    const result = fruits.join();
    console.log(result);
}

// split -> 문자열을 배열로
{
    const fruits = 'apple,banana,peach';
    const result = fruits.split();
    console.log(result);
}

// reverse - 배열의 순서를 거꾸로
{
    const array = [1, 2 ,3 , 4, 5];
    const result = array.reverse();
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// find - 배열안에 있는 값 찾기
{
    const result = student.find((student) => student.score === 90);
    console.log(result);
}

// filter 
{
    const result = student.filter((student) => student.enrolled);
    console.log(result);
}

// map - 원하는 배열 만들기
{
    const result = student.map((student) => student.score);
    console.log(result);
}

// some - 조건을 만족하는 것이 하나라도 있으면 true
{
    const result = student.some((student) => student.score < 50);
    console.log(result);
}

// every - 조건을 모두 만족해야 true
{
    const result = student.every((student) => student.score >50);
    console.log(result);
}

// reduce - 합 구하기
{
    const result = student.reduce((prev, curr) => {
        console.log('----------------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    // console.log(result); // 합
    console.log(result / student.length); // 평균
}

// 간단한 버전
{
    const result = student.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result/student.length);
}

// map + join
{
    console.clear();
    const result = student.map((student) => student.score).join();
    console.log(result);
}

// sort
{
    console.clear();
    const result = student
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result);
}