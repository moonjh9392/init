import styled from 'styled-components';
import { ChangeEvent, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { postData } from '../api/api';

interface UserInfo {
	email: string;
	password: string;
}

const Login = () => {
	//user 정보 담을 객체
	const [user, setUser] = useState<UserInfo>({ email: '', password: '' });
	const navigate = useNavigate();

	useEffect(() => {
		//첫페이지에서 토큰이 있는 경우 메인페이지로 이동
		// if (localStorage.getItem('token')) navigate('/main');
	}, []);

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		//name과 value를 뽑아 객체에 덮어씌운다.
		setUser({
			...user,
			[name]: value,
		});
	};
	/**
	 * 회원가입
	 */
	const SignUp = (): void => {
		postData('http://localhost:8080/users/create', user).then((res) =>
			//토큰 로컬스토리지 저장
			localStorage.setItem('token', res.token),
		);
	};
	/**
	 * 로그인
	 */
	const SignIn = (): void => {
		postData('http://localhost:8080/users/login', user).then((res) => {
			//토큰 로컬스토리지 저장
			localStorage.setItem('token', res.token);
			//로그인시 헤더에 토큰 저장
			axios.defaults.headers.authorization = res.token;
			//메인페이지 이동
			navigate('/main');
		});
	};
	return (
		<LoginContainer>
			<form>
				<input
					type="text"
					name="email"
					onChange={onChange}
					autoComplete="off"
					placeholder="email"
				/>
				<input
					type="password"
					name="password"
					onChange={onChange}
					autoComplete="off"
					placeholder="password"
				/>
				<button type="button" onClick={SignUp}>
					회원가입
				</button>
				<button type="button" onClick={SignIn}>
					로그인
				</button>
			</form>
		</LoginContainer>
	);
};

export default Login;

const LoginContainer = styled.div`
	margin-top: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
