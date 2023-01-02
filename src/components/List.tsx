import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheckCircle,
	faDeleteLeft,
	faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Todo } from '../pages/Main';

interface ListProps {
	todo: Todo;
}

export default function List({ todo }: ListProps) {
	const [deleteOver, setDeleteOver] = useState(false);
	const [saveOver, setOver] = useState(false);

	const [content, setContent] = useState(todo.content);
	const check = true;

	const handleDeleteClick = () => {
		const title = '메모 삭제하기';
		const todos = `${todo.title}을(를) 끝내셨나요?`;
	};
	const handleChangecontent = (event) => {
		setContent(event.target.value);
	};
	return (
		<ListStyle>
			<CheckBox>
				<FontAwesomeIcon
					icon={faCheckCircle}
					size="2x"
					color={check ? 'green' : 'gray'}
				/>
			</CheckBox>

			<TodoBox>
				{todo.title}
				<textarea
					value={content}
					placeholder="메모 입력 후 저장을 눌러주세요."
					onChange={handleChangecontent}
				/>
			</TodoBox>
			<DeleteBox>
				<FontAwesomeIcon
					icon={faDeleteLeft}
					size="2x"
					color={deleteOver ? 'pink' : 'gray'}
					onMouseOver={() => {
						setDeleteOver(true);
					}}
					onMouseLeave={() => {
						setDeleteOver(false);
					}}
					onClick={handleDeleteClick}
				/>
				<FontAwesomeIcon
					icon={faDownload}
					size="2x"
					color={saveOver ? 'skyblue' : 'gray'}
					onMouseOver={() => {
						setOver(true);
					}}
					onMouseLeave={() => {
						setOver(false);
					}}
				/>
			</DeleteBox>
		</ListStyle>
	);
}

const boxShow = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const ListStyle = styled.div`
	margin: 20px 0;
	background-color: white;
	width: 100%;
	border-radius: 8px;
	border: 1px solid rgba(231, 231, 234);
	display: flex;
	animation: ${boxShow} 1s;
	div {
		padding: 10px;
	}
`;
const CheckBox = styled.div`
	flex-grow: 0.5;
`;
const TodoBox = styled.div`
	flex-grow: 5;
	display: flex;
	flex-direction: column;
	justify-todo: space-between;
	font-size: larger;
	textarea {
		border: none;
		border-radius: 4px;
		resize: none;
	}
`;
const DeleteBox = styled.div`
	flex-grow: 0.5;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-todo: space-between;
`;
