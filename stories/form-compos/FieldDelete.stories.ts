import type { Meta, StoryObj } from '@storybook/vue3';
import FieldDelete from '../../components/form-compos/FieldDelete.vue';

const meta: Meta<typeof FieldDelete> = {
  component: FieldDelete,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    placeholder: 'contenido...',
    modelValue: ''
  },
};

export default meta;

type Story = StoryObj<typeof FieldDelete>;

export const Solid: Story = {

};

