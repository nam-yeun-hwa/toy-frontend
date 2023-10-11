import styled from '@emotion/styled';
import Text from 'components/ui/Text';
import { FormProvider, useForm } from 'react-hook-form';

interface IJoinFormInput {
	userName: string;
	userId: string;
	password: string;
}

export default function join(): JSX.Element {
	const methods = useForm<IJoinFormInput>();
	return (
		<JoinContainer className="page_container">
			<p className="txt">
				지금 <span>회원가입</span>만 해도 <br></br>지상파 포함 50여개 LIVE
				채널을 <br></br>
				<span>무료로</span> 즐길 수 있어요.
			</p>
			<FormProvider {...methods}>
				<form>
					<Text regName="joinName" placeholder="이름" />
					<Text regName="joinId" placeholder="아이디" />
				</form>
			</FormProvider>
		</JoinContainer>
	);
}

const JoinContainer = styled.div`
	.txt {
		font-size: 21px;
		font-weight: 100;
		padding: 62px 45px;
		color: ${props => props.theme.text.primary};
		margin: 0;
	}
`;
