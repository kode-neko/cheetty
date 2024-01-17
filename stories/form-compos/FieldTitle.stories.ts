import type { Meta, StoryObj } from '@storybook/vue3';
import FieldTitle from '../../components/form-compos/FieldTitle.vue';

const meta: Meta<typeof FieldTitle> = {
  component: FieldTitle,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    placeholder: 'contenido...',
    modelValue: ''
  },
};

export default meta;

type Story = StoryObj<typeof FieldTitle>;

export const Solid: Story = {

};

