import { Story, Meta } from "@storybook/react/types-6-0";
import BookSearch, { BookSearchProps } from "./BookSearch";

export default {
  title: "Pages/BookSearch",
  component: BookSearch,
} as Meta;

const Template: Story<BookSearchProps> = (args) => <BookSearch {...args} />;

export const Default = Template.bind({});
Default.args = {};
