import { Meta, Story } from "@storybook/react/types-6-0";
import { PureSearchBar, PureSearchBarProps } from "./SearchBar";

export default {
  title: "Pages/BookSearch/SearchBar",
  component: PureSearchBar,
} as Meta;

const Template: Story<PureSearchBarProps> = (args) => (
  <PureSearchBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  query: "",
};
