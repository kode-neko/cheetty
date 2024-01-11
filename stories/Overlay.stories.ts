import type { Meta, StoryObj } from '@storybook/vue3';
import Overlay from '../components/Overlay.vue';

const meta: Meta<typeof Overlay> = {
  component: Overlay,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    isVisible: true 
  },
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  args: {
  },
};
