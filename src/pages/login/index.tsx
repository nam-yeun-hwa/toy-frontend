import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Text from "components/ui/Text";
import { instance } from "pages/api";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { IUserSignIn } from "types/common/    commonType";

interface ILoginFormInput {
  id: string;
  pw: string;
}

export default function login(): JSX.Element {
  const {} = useQuery(
    ["login"],
    async () =>
      await instance.post<string, IUserSignIn>(
        "http://localhost:8080/auth/signup",
        {
          username: "test@hanmail.net",
          password: "123456",
        }
      ),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess(data: AxiosError) {
        console.log("data", data.response?.data);
      },
    }
  );

  // const { data, status, isError, error } = useQuery(
  // 	['getCampaignList', params],
  // 	async () =>
  // 		await await instance.get('/api/campaigns', {
  // 			params: {
  // 				page: params.page,
  // 				size: params.size,
  // 			},
  // 		}),
  // 	{
  // 		onSuccess(data: AxiosError) {
  // 			console.log('data', data.response?.status);
  // 		},
  // 		// useErrorBoundary(error: any, query) {
  // 		// 	return error.response?.status >= 500;
  // 		// },
  // 		suspense: true, // 데이터 불러오기를 위한 Suspense를 활성화하는 옵션
  // 		// suspense 옵션을 통해 useQuery Hook을 "Suspense를 지원하는 특별한 객체"로 사용합니다.
  // 		// suspense 옵션이 켜져 있는 경우 Error Boundary를 통한 에러 처리도 가능합니다.
  // 		// useErrorBoundary: true, // Error Boundary 사용을 위한 옵션. suspense 옵션이 true인 경우에는 기본값이 true로 설정된다.
  // 		refetchOnWindowFocus: false,
  // 		refetchOnMount: false,
  // 		retry: 0,
  // 		onError(err) {
  // 			// dispatch(errorModalStateAction.rdxOpenModalToggle(true));
  // 			// 실패시 호출
  // 			// (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
  // 			// 강제로 에러 발생시키려면 api단에서 throw Error 날립니다.
  // 			// 	주로 4xx 오류는 로컬 콜백으로 처리합니다(5xx 에러는 useErrorBoundary 사용).
  // 			// 오류를 컴포넌트 각각에서 처리하지 않고 한번에 처리하거나, 사용자에게 알릴 목적이면
  // 			// QueryCache / MutationCache 의 필드를 사용합니다.
  // 		},
  // 	},
  // );

  const methods = useForm<ILoginFormInput>();
  const { setValue } = methods;

  const onSubmitCreditCardRegister: SubmitHandler<ILoginFormInput> = (
    data
  ) => {};

  return (
    <LoginContainer>
      <div className="logo">
        <img src="./img/logo.jpg" alt="" />
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitCreditCardRegister)}>
          <div className="input-contain">
            <Text regName="userId" placeholder="이메일 주소 또는 아이디" />
            <Text
              regName="userId"
              placeholder="비밀번호를 입력해 주세요."
              type="password"
            />
          </div>
        </form>
      </FormProvider>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0px 20px;
  .logo {
    width: 132px;
    height: 38px;
    padding-bottom: 23px;
    img {
      width: 100%;
      height: auto;
    }
  }
  form {
    width: 100%;
    .input-contain {
      > :first-child {
        margin-bottom: 10px;
      }
      padding: 20px 0px;
    }
  }
`;
