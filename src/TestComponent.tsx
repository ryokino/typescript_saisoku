import { useState } from 'react';

interface Props {
	text: string;
}

interface UserData {
	id: number;
	name: string;
}

const TestComponent: React.FC<Props> = (props) => {
	const [count, setCount] = useState<number | null>(null);
	const [user, setUser] = useState<UserData>({ id: 1, name: 'dummy' });
	const [inputData, setInputData] = useState('');

	const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputData(e.target.value);
	};

	return (
		<div>
			<h1>{props.text}</h1>
			<h1>{count}</h1>
			<input type='text' value={inputData} onChange={handleInputData} />
			<h1>{inputData}</h1>
		</div>
	);
};

export default TestComponent;
