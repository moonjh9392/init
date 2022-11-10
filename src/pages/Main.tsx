import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { down, init, up } from '../slices/counterSlice';
import styled from 'styled-components';

const MainStyle = styled.div`
	margin-top: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Main = () => {
	const dispach = useDispatch();
	const count = useSelector((state: RootState) => {
		return state.counter.value;
	});
	const addNumber = () => {
		dispach(up(1));
	};
	const minusNumber = () => {
		dispach(down(1));
	};
	const initNumber = () => {
		dispach(init(''));
	};
	return (
		<MainStyle>
			<div>{count}</div>
			<button onClick={addNumber}>+</button>
			<button onClick={minusNumber}>-</button>
			<button onClick={initNumber}>초기화</button>
		</MainStyle>
	);
};

export default Main;
