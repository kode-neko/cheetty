import type { Meta, StoryObj } from '@storybook/vue3';
import MainBar from '../../components/main-bar/MainBar.vue';

const meta: Meta<typeof MainBar> = {
  component: MainBar,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
  },
};

export default meta;

type Story = StoryObj<typeof MainBar>;

export const Default: Story = {
  args: {
  },
};
