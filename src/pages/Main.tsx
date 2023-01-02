import styled from 'styled-components';
import TodoList from '../components/TodoList';
import { ChangeEvent, useEffect, useState } from 'react';
import { getData, postData } from '../api/api';

export interface Todo {
	id?: string;
	title: string;
	content: string;
	createdAt?: string;
	updatedAt?: string;
}

const Main = () => {
	const [todoList, setTodoList] = useState<Array<Todo>>([]);
	const [todo, setTodo] = useState<Todo>({ title: '', content: '' });

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		//name과 value를 뽑아 객체에 덮어씌운다.
		setTodo({
			...todo,
			[name]: value,
		});
	};
	useEffect(() => {
		getData('http://localhost:8080/todos/').then((res) =>
			setTodoList(res.data),
		);
	}, []);

	/**
	 * todo 생성
	 */
	const createTodo = (): void => {
		postData('http://localhost:8080/todos/', todo);
	};
	return (
		<MainStyle>
			<div className="background">
				<div className="menu">
					<form>
						<input
							type="text"
							name="title"
							onChange={onChange}
							autoComplete="off"
							placeholder="title"
						/>
						<input
							type="text"
							name="content"
							onChange={onChange}
							autoComplete="off"
							placeholder="content"
						/>
						<button onClick={createTodo}>추가</button>
					</form>

					<TodoList todoList={todoList} />
				</div>
			</div>
		</MainStyle>
	);
};

export default Main;

const MainStyle = styled.div`
	.menu {
		position: relative;
		margin: 0 auto;
		max-width: 718px;

		@media screen and (max-width: 768px) {
			padding: 128px 24px;
			top: -128px;
		}
	}

	.background {
		background-color: whitesmoke;
		padding-bottom: 80px;
		padding-top: 40px;
		height: 100vh;
		@media screen and (min-height: 1200px) {
			height: 100%;
		}
	}
`;
