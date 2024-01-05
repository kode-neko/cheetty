import type { Meta, StoryObj } from '@storybook/vue3';
import Field from '../../components/form-compos/Field.vue';

const meta: Meta<typeof Field> = {
  component: Field,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    placeholder: 'contenido...',
    modelValue: ''
  },
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Solid: Story = {

};

