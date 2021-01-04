import { Meta, Story } from "@storybook/react/types-6-0";
import { PureLocalLoginForm, PureLocalLoginFormProps } from "./LocalLoginForm";

export default {
  title: "Molecules/Login/LocalLoginForm",
  component: PureLocalLoginForm,
  decorators: [
    (story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>{story()}</div>
    ),
  ],
} as Meta;

const Template: Story<PureLocalLoginFormProps> = (args) => (
  <PureLocalLoginForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: {
    email: "",
    password: "",
  },
  error: "",
  loading: "idle",
  onChange: () => {},
  onSubmit: (e) => {
    e.preventDefault();
    console.log("로그인 시도");
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
