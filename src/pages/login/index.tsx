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
            <Text regName="userId" placeholder="이메일 주소 또는 아이디" />
            <Text regName="userId" placeholder="이메일 주소 또는 아이디" />
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
