import type { Meta, StoryObj } from '@storybook/vue3';
import MenuSearch from '../../components/main-bar/MenuSearch.vue';
import useGlobals from '../../stores/globals';

const meta: Meta<typeof MenuSearch> = {
  component: MenuSearch,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {
    isVisible: true
  },
};

export default meta;

type Story = StoryObj<typeof MenuSearch>;

export const Default: Story = {
  args: {
  },
};
