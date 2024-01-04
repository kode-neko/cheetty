import type { Meta, StoryObj } from '@storybook/vue3';
import Tag from '../components/Tag.vue';

const meta: Meta<typeof Tag> = {
  component: Tag,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    label: 'docker',
    del: true,
    size: 'sm',
    color: 'purple',
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Delete: Story = {
  args: {
    label: 'docker',
    del: true,
    size: 'md',
    color: 'purple',
  },
};

export const Md: Story = {
  args: {
    label: 'docker',
    del: false,
    size: 'md',
    color: 'purple',
  },
};

export const Sm: Story = {
  args: {
    label: 'docker',
    del: false,
    size: 'sm',
    color: 'purple',
  },
};