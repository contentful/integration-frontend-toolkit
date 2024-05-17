import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Subheading } from '@contentful/f36-components';
import SearchableList from './SearchableList';

const meta: Meta<typeof SearchableList> = {
  title: 'General/SearchableList',
  component: SearchableList,
  decorators: [
    (Story) => (
      <>
        <Heading marginBottom="spacing4Xl" style={{ fontSize: '44px' }}>
          Use the Storybook "Controls" to Search
        </Heading>
        <Story />
      </>
    ),
  ],
};

type Story = StoryObj<typeof SearchableList>;

export const Default: Story = {};

const renderListItem = (item: any) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '2%', padding: '2% 2% 1%' }}>
      <Heading>Team: {item?.name}</Heading>
      <Subheading>
        Channels:{' '}
        {item?.channels.map((c: any, idx: number) => {
          return (
            <span key={idx}>
              {c}
              {', '}
            </span>
          );
        })}
      </Subheading>
      <Subheading>
        {Object.entries(item?.skills).map((entry: any, idy: number) => {
          const [skill, rating] = entry;
          return (
            <div key={idy} style={{ marginLeft: '5%' }}>
              <span>
                {skill}: {rating?.rating}
              </span>
            </div>
          );
        })}
      </Subheading>
    </div>
  );
};

Default.args = {
  searchQuery: '',
  items: [
    {
      id: '123',
      name: 'research & development',
      channels: ['General', 'prd', 'data', 'eng'],
      skills: {
        SQL: {
          rating: 6,
        },
        PRDs: {
          rating: 8,
        },
      },
    },
    {
      id: '456',
      name: 'design & implementation',
      channels: ['fun-dog', 'pair-programming', 'planning'],
      skills: {
        coding: {
          rating: 7,
        },
        communication: {
          rating: 4,
        },
      },
    },
    {
      id: '789',
      name: 'customer support',
      channels: ['General', 'customer-1', 'hi_prioity', 'spring Launch'],
      skills: {
        Email: {
          rating: 10,
        },
        Slack: {
          rating: 9,
        },
      },
    },
    {
      id: '632',
      name: 'Sales',
      channels: ['gen', 'staffing', 'incidents', 'sprint_reviews'],
      skills: {
        Jira: {
          rating: 7,
        },
        SalesForce: {
          rating: 10,
        },
      },
    },
  ],

  renderListItem,

  searchKeys: ['name', 'channels', 'skills', 'id', 'skills'],
};

export default meta;
