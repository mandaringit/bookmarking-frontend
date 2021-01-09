import { Meta, Story } from "@storybook/react/types-6-0";
import { PureLocalAuthForm, PureLocalAuthFormProps } from "./LocalAuthForm";

export default {
  title: "Pages/Login/LocalAuthForm",
  component: PureLocalAuthForm,
  decorators: [
    (story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>{story()}</div>
    ),
  ],
} as Meta;

const Template: Story<PureLocalAuthFormProps> = (args) => (
  <PureLocalAuthForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: "login",
  user: {
    email: "",
    password: "",
  },
  error: "",
  loading: "idle",
  onChange: () => {},
  onLogin: () => {
    console.log("로그인 시도");
  },
  onSignup: () => {
    console.log("회원가입 시도");
  },
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: "loading",
  user: {
    email: "mandarin.test@kakao.com",
    password: "1234567",
  },
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  user: {
    email: "mandarin.test@kakao.com",
    password: "1234567",
  },
  loading: "failed",
  error: "로그인 에러 발생",
};

export const Singup = Template.bind({});
Singup.args = {
  ...Default.args,
  type: "signup",
};
