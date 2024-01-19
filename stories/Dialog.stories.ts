import type { Meta, StoryObj } from '@storybook/vue3';
import Dialog from '../components/Dialog.vue';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  argTypes: {
  },
  tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Delete: Story = {
  args: {
    isVisible: true,
    title: 'Borrar Cheetty',
    msg: '¿Desea borrar el cheettyy seleccioando?',
    iconMsg: 'fa-solid fa-trash-can',
    btn01Label: 'cancel',
    btn02Label: 'accept' 
  },
};
