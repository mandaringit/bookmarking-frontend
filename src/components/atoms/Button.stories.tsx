import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { CustomButtonProps } from "./Button";
import styled from "styled-components";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "BUTTON",
};

export const primaryButton = Template.bind({});
primaryButton.args = { children: "PRIMARY" };
export const secondaryButton = Template.bind({});
secondaryButton.args = { children: "SECONDARY", theme: "secondary" };
export const tertiaryButton = Template.bind({});
tertiaryButton.args = { children: "TERTIARY", theme: "tertiary" };

const ButtonWrapper = styled.div`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <ButtonWrapper>
      <div>
        <div className='description'>small</div>
        <Button size='small'>BUTTON</Button>
      </div>
      <div>
        <div className='description'>medium</div>
        <Button size='medium'>BUTTON</Button>
      </div>
      <div>
        <div className='description'>large</div>
        <Button size='large'>BUTTON</Button>
      </div>
    </ButtonWrapper>
  );
};

export const disabled = () => {
  return (
    <ButtonWrapper>
      <div>
        <Button disabled>BUTTON</Button>
      </div>
      <div>
        <Button disabled theme='secondary'>
          BUTTON
        </Button>
      </div>
      <div>
        <Button disabled theme='tertiary'>
          BUTTON
        </Button>
      </div>
    </ButtonWrapper>
  );
};

export const customSized = () => {
  return (
    <ButtonWrapper>
      <div>
        <Button width='20rem'>20rem</Button>
      </div>
      <div>
        <Button width='100%'>100%</Button>
      </div>
    </ButtonWrapper>
  );
};
