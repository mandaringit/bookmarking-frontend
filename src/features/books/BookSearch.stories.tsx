import { Story, Meta } from "@storybook/react/types-6-0";
import { PureBookSearch, PureBookSearchProps } from "./BookSearch";
import { Fetch10Items } from "./BookSearchList.stories";

export default {
  title: "Page/BookSearch",
} as Meta;

const Template: Story<PureBookSearchProps> = (args) => (
  <PureBookSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {
  books: [],
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  books: [],
  loading: true,
};

export const ItemEmpty = Template.bind({});
ItemEmpty.args = {
  books: [],
  loading: false,
};

export const ItemExist = Template.bind({});
ItemExist.args = {
  books: Fetch10Items.args!.books,
  loading: false,
};
