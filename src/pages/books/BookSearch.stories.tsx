import { Story, Meta } from "@storybook/react/types-6-0";
import { PureBookSearch, PureBookSearchProps } from "./BookSearch";
import { Fetch10Items } from "./BookSearchList.stories";

export default {
  title: "Pages/BookSearch",
  component: PureBookSearch,
} as Meta;

const Template: Story<PureBookSearchProps> = (args) => (
  <PureBookSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {
  query: "",
  books: [],
  loading: false,
  onChange: () => {},
  onSearch: () => {},
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const Item0 = Template.bind({});
Item0.args = {
  ...Default.args,
};

export const Item10 = Template.bind({});
Item10.args = {
  ...Default.args,
  books: Fetch10Items.args!.books,
};
