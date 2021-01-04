import { Meta, Story } from "@storybook/react/types-6-0";
import SearchBar, { SearchBarProps } from "./SearchBar";

export default {
  title: "Molecules/SearchBar",
  component: SearchBar,
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
