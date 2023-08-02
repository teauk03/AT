// TypeScript를 사용하여 CSS 모듈을 불러올 때, TypeScript는 모듈의 타입을 알지 못합니다.
// 이 때문에, CSS 모듈을 import하려고 하면 TypeScript에서는 오류를 발생시킵니다.

// "*.module.css"라는 모듈이 어떤 타입인지 알려주기 위해 전역 타입 선언을 이용합니다.
// "*.module.css", "*.module.scss", "*.module.sass" 형태의 모듈이 어떤 타입인지 선언합니다.
declare module '*.module.css';

// '*.module.scss' 파일들을 모듈로서 불러오는 것에 대한 타입을 선언합니다.
// TypeScript는 '.module.scss' 확장자를 가진 파일들을 모듈로서 사용할 수 있게 됩니다.
declare module '*.module.scss';

// '*.module.sass' 파일들을 모듈로서 불러오는 것에 대한 타입을 선언합니다.
// TypeScript는 '.module.sass' 확장자를 가진 파일들을 모듈로서 사용할 수 있게 됩니다.
declare module '*.module.sass';