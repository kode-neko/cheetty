import type { Meta, StoryObj } from '@storybook/vue3';
import MainBarMobile from '../../components/main-bar/MainBarMobile.vue';

const meta: Meta<typeof MainBarMobile> = {
  component: MainBarMobile,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
  },
};

export default meta;

type Story = StoryObj<typeof MainBarMobile>;

export const Default: Story = {
  args: {
  },
};