import type { Meta, StoryObj } from '@storybook/vue3';
import FieldTag from '../../components/form-compos/FieldTag.vue';

const meta: Meta<typeof FieldTag> = {
  component: FieldTag,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    tags: [
      'patata', 'pomelo'
    ]
  },
};

export default meta;

type Story = StoryObj<typeof FieldTag>;

export const Solid: Story = {

};

