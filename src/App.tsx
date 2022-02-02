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

function App() {
	return (
		<div className='App'>
			<header className='App-header'></header>
		</div>
	);
}

export default App;
