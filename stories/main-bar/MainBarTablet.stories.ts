import type { Meta, StoryObj } from '@storybook/vue3';
import MainBarTablet from '../../components/main-bar/MainBarTablet.vue';

const meta: Meta<typeof MainBarTablet> = {
  component: MainBarTablet,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
  },
};

export default meta;

type Story = StoryObj<typeof MainBarTablet>;

export const Default: Story = {
  args: {
  },
};