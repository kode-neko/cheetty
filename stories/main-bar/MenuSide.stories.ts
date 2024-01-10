import type { Meta, StoryObj } from '@storybook/vue3';
import MenuSide from '../../components/main-bar/MenuSide.vue';
import useGlobals from '../../stores/globals';

const { socialList } = useGlobals();

const meta: Meta<typeof MenuSide> = {
  component: MenuSide,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    isVisible: true
  },
};

export default meta;

type Story = StoryObj<typeof MenuSide>;

export const Default: Story = {
  args: {
  },
};
