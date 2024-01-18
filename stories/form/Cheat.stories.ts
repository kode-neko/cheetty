import type { Meta, StoryObj } from '@storybook/vue3';
import Cheat from '../../components/form/Cheat.vue';
import useGlobals from '../../stores/globals'; 

const cheat = {
  title: 'Ad velit incididunt ut ad non amet',
  content: 'Magna voluptate eiusmod commodo sunt ad.',
  tags: [ 'papa', ]
};

const meta: Meta<typeof Cheat> = {
  component: Cheat,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    modelValue: cheat 
  },
};

export default meta;

type Story = StoryObj<typeof Cheat>;

export const Default: Story = {
};

export const Line: Story = {
  args: {
    modelValue: {
      ...cheat, content: [
        'Laboris nisi ut nostrud commodo ipsum', 'Est labore voluptate pariatur ea pariatur.'
      ]
    }
  }
};
