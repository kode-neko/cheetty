import type { Meta, StoryObj } from '@storybook/vue3';
import MenuContext from '../../components/MenuContext.vue';
import useGlobals from '../../stores/globals';

const { socialList } = useGlobals();

const meta: Meta<typeof MenuContext> = {
  component: MenuContext,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    opts: socialList
  },
};

export default meta;

type Story = StoryObj<typeof MenuContext>;

export const Default: Story = {
  args: {
  },
};
