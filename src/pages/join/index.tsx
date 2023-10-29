import styled from '@emotion/styled';
import Layout from 'components/layout/Layout';
import { Button } from 'components/ui/Button';
import { DescBox } from 'components/ui/Desc';
import Text from 'components/ui/Text';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ButtonType } from 'types/common/option';

interface IJoinFormInput {
	userName: string;
	userId: string;
	password: string;
}

export default function join(): JSX.Element {
	const methods = useForm<IJoinFormInput>();

	/**
	 * @function onSubmitJoin
	 * @description submitHandler
	 * @param data
	 */
	const onSubmitJoin: SubmitHandler<IJoinFormInput> = data => {
		console.log(data);
	};

	return (
		<Layout>
			<JoinContainer className="page_container">
				<p className="txt">
					지금 <span>회원가입</span>만 해도 <br></br>지상파 포함 50여개 LIVE
					채널을 <br></br>
					<span>무료로</span> 즐길 수 있어요.
				</p>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmitJoin)}>
						<div className="input-contain">
							<Text regName="joinName" placeholder="이름" />
							<Text regName="joinId" placeholder="아이디" />
							<DescBox desc={{ paddingBottom: '20px' }}>
								6~12자 영문, 숫자로 입력해 주세요.
							</DescBox>
							<Text regName="password" placeholder="비밀번호" />
							<Text regName="password_confirm" placeholder="비밀번호 확인" />
							<DescBox desc={{ paddingBottom: '20px' }}>
								비밀번호는 영문 대소문자, 숫자, 특수문자(.!@#$%)를 혼합하여
								8~20자로 입력해 주세요.
							</DescBox>
						</div>
						<Button type={ButtonType.BOTTOM}>다음</Button>
					</form>
				</FormProvider>
			</JoinContainer>
		</Layout>
	);
}

const JoinContainer = styled.div`
	.txt {
		font-size: 21px;
		font-weight: 100;
		padding: 62px 25px;
		color: ${props => props.theme.info.main};
		margin: 0;
	}

	.input-contain {
		> * {
			margin-bottom: 12px;
		}
	}
`;
