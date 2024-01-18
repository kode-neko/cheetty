import type { Meta, StoryObj } from '@storybook/vue3';
import Textarea from '../../components/form-compos/Textarea.vue';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    placeholder: 'contenido...',
    modelValue: ''
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Solid: Story = {

};

