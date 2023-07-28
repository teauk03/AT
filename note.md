- 단축키 (Web Storm)
    - 찾은단어 모두 선택 : Ctrl + F로 단어 선택 후, Ctrl + Alt + Shift + J
    - 우측 코드 바 액티브(논 애티브) : Ctrl + Shift + G

# 알게된것
## 비구조화 할당(destructuring assignment) : 객체 또는 배열에서 특정 값을 추출하여 새로운 변수에 할당하는 방법
`const { current, setCurrent } = useCarouselSlide();`라는 구문은 `useCarouselSlide()`에서 반환한 객체에서
`current`와 `setCurrent`를 추출하여 각각 `current`와 `setCurrent`라는 새로운 변수에 할당합니다.

이렇게 하면 `current`와 `setCurrent`를 `useCarouselSlide().current`, `useCarouselSlide().setCurrent`가 아닌
`current`, `setCurrent`로 바로 사용할 수 있습니다. 

원래 마침표 표기법으로 객체에 접근해야하는데 객체 이름으로 바로 접근이 가능함.

```javascript
const person = {
    name: 'John',
    age: 30,
    country: 'USA'
};

console.log(person.name);  // "John"
console.log(person.age);   // 30
console.log(person.country); // "USA"

// 비구조화 할당을 사용
const {name, age, country} = person;

console.log(name);  // "John"
console.log(age);   // 30
console.log(country); // "USA"
```