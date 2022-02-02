import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = 'hello'; //リテラル型(今回のパターンでは 文字列リテラル と呼ぶ)

let nameChange: string = 'Hello';
let dummyNumber = 2;
let bool = true;

let array1 = [true, false, true];
let array2 = [0, 1, 'hello'];

// オブジェクトの型の名前
interface NAME {
	first: string;
	last: string | null;
}

let nameObj: NAME = {
	first: 'Yamada',
	last: null,
};

const func1 = (x: number, y: number): number => {
	return x + y;
};

// Intersection Type : 複数のtypeを結合する処理
type PROFILE = {
	age: number;
	city: string;
};

type LOGIN = {
	username: string;
	password: string;
};

type USER = PROFILE & LOGIN; // <-!!

const userA: USER = {
	age: 30,
	city: 'Tokyo',
	username: 'xxx',
	password: 'yyy',
};

// Union Type: 変数が受け取れる型を
let value: boolean | number;
value = true;
value = 3;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, 'hello'];

// Literal Types: constの時のやつ
// Literal type + Union Types

let company: 'Facebook' | 'Google' | 'Amazon';
company = 'Amazon';

let memory: 256 | 512;
memory = 512;

// typeof: 宣言済みの定数の型を取得する -> jsonのdata typeを使うときに型が複雑でも簡単に使えるようになる
let msg1: string = 'hello';
let msg2: typeof msg1;

let animal = { cat: 'small cat' };
let newAnumal: typeof animal = { cat: 'big cat' };

// keyof: どちらかのkeyをunion型で取得する。
type KEYS = {
	primary: string;
	secondary: string;
};

let key: keyof KEYS;
key = 'primary';

// keyof + typeof

const SPORTS = {
	soccer: 'Soccer',
	baseball: 'Baseball',
};

let keySports: keyof typeof SPORTS;
keySports = 'baseball';
// keyofは型宣言にのみ使えるが、これは具体的なオブジェクトに対して使える

// enum: 自動で連番をつけてくれる機能
enum OS {
	Windows,
	Mac,
	Linux,
}
interface PC {
	id: number;
	OSType: OS;
}
const PC1: PC = {
	id: 1,
	OSType: OS.Windows,
};
const PC2: PC = {
	id: 1,
	OSType: OS.Mac,
};
const PC3: PC = {
	id: 1,
	OSType: OS.Linux, // 勝手に数値が当てられてる。
};

function App() {
	return (
		<div className='App'>
			<header className='App-header'></header>
		</div>
	);
}

export default App;
