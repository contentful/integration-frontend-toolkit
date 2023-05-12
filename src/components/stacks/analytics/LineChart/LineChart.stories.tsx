import type { Meta, StoryObj } from '@storybook/react';

import LineChart from './LineChart';

const mockData = [1000, -500, 500, 230];
const mockLabels = ['January', 'February', 'March', 'April'];

const meta: Meta<typeof LineChart> = {
  title: 'Stacks/Analytics/LineChart',
  component: LineChart,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof LineChart>;

export const Primary: Story = {};

Primary.args = {
  dataValues: mockData,
  xAxisLabels: mockLabels,
  tooltipMetricLabel: 'Page views:',
};

export default meta;
