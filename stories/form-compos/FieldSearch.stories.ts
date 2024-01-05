import type { Meta, StoryObj } from '@storybook/vue3';
import FieldSearch from '../../components/form-compos/FieldSearch.vue';

console.log(import.meta.env);

const meta: Meta<typeof FieldSearch> = {
  component: FieldSearch,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    placeholder: 'buscar...',
    modelValue: ''
  },
};

export default meta;

type Story = StoryObj<typeof FieldSearch>;

export const Solid: Story = {

};

