import type { Meta, StoryObj } from '@storybook/vue3';
import Switch from '../../components/form-compos/Switch.vue';

const meta: Meta<typeof Switch> = {
  component: Switch,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    labels: [
      'list', 'text'
    ],
    right: true
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    labels: [
      'list', 'text'
    ],
    right: false
  },
};

export const Left: Story = {
  args: {
    labels: [
      'list', 'text'
    ],
    right: true
  },
};