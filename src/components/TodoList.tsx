import styled from 'styled-components';
import { Todo } from '../pages/Main';
import Loading from './common/Loading';
import List from './List';

interface TodoListProps {
	todoList: Array<Todo>;
}

export default function TodoList({ todoList }: TodoListProps) {
	console.log(todoList);
	return (
		<TodoListStyle>
			{todoList ? (
				todoList.map((todo: Todo) => <List key={todo.id} todo={todo} />)
			) : (
				<Loading />
			)}
		</TodoListStyle>
	);
}

const TodoListStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 30px;
`;
