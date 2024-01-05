import type { Meta, StoryObj } from '@storybook/vue3';
import BtnIcon from '../../components/form-compos/BtnIcon.vue';

const meta: Meta<typeof BtnIcon> = {
  component: BtnIcon,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    color: 'pink'
  },
};

export default meta;

type Story = StoryObj<typeof BtnIcon>;

export const Default: Story = {
  args: {
    icon: 'fa-solid fa-pencil'
  },
};