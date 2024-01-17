import type { Meta, StoryObj } from '@storybook/vue3';
import Card from '../components/Card.vue';
import type { Link } from '~/models';

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {
  },
  tags: [ 'autodocs' ],
  args: {

  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    cheat: {
      title: 'docker container run -d [image_name]',
      content: [
        'Levanta un contenedor con la imagen indicada', 'Lo hace en 2º plano. Puedes continuar en la misma terminal'
      ],
      tags: [
        'docker',
        'docker',
        'docker'
      ]
    }
  },
};

const pic: Link = {
  name: 'example',
  path: '/pics/code.jpg',
  alt: '',
};

export const Picture: Story = {
  args: {
    cheat: {
      title: 'docker container run -d [image_name]',
      pic,
      content: [
        'Levanta un contenedor con la imagen indicada', 'Lo hace en 2º plano. Puedes continuar en la misma terminal'
      ],
      tags: [
        'docker',
        'docker',
        'docker'
      ]
    }
  },
};
