import type { Meta, StoryObj } from '@storybook/vue3';
import Field from '../../components/form-compos/Field.vue';
import useGlobals from '../../stores/globals'; 

const { tagPattern } = useGlobals();

const meta: Meta<typeof Field> = {
  component: Field,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    placeholder: 'contenido...',
    modelValue: '',
  },
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {

};

let val = '';
const getVal = () => val;

export const Pattern: Story = {
  args: {
    modelValue: getVal(),
    pattern: tagPattern,
    'update:modelValue': (newVal: string) => {val = newVal;} 
  },
};

