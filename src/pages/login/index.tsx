import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

interface ILoginFormInput {
  id: string;
  pw: string;
}

export default function login(): JSX.Element {
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
            {/* TODO:React Hook form을 사용한 Validation을 적용시켜 줍니다. 

            1.아이디 타입은 이메일 형식으로 합니다. 이메일 형식이 아닐 경우 message:
            '올바른 이메일 주소를 입력하세요.', 
            
            2.필수형식이며 

            3. 최소9에서 최대 50자로 체크합니다. 형식에 벗어날 경우 message: '올바른 이메일 주소를
            입력하세요.' 로 표시합니다. 
            
            프롭스롤 통해 Validation을 넣어주며 형식은 Text 컴포넌트를 참고하여 진행 합니다.
            각각의 궁금한 점 하나하나 질문 하셔도 됩니다. 

            */}
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
