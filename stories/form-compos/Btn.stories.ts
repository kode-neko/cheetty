import type { Meta, StoryObj } from '@storybook/vue3';
import Btn from '../../components/form-compos/Btn.vue';

const meta: Meta<typeof Btn> = {
  component: Btn,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    //👇 Now all Button stories will be primary.
    label: 'New cheat',
  },
};

export default meta;

type Story = StoryObj<typeof Btn>;

export const Solid: Story = {
  args: {
    label: 'New cheat',
    icon: [
      'fas', 'circle-plus'
    ],
    solid: true
  },
};

export const Line: Story = {
  args: {
    label: 'New cheat',
    icon: [
      'fas', 'circle-plus'
    ],
    solid: false
  },
};
