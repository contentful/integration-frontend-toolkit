import { render } from '@testing-library/react';

import EntityCard from './EntityCard';

describe('EntityCard component', () => {
  it('Renders', () => {
    render(
      <EntityCard
        description="Some description"
        entityType="Some Entity Type"
        title="Some test title"
      />
    );

    const card = document.querySelector('[data-test-id="entity-card-single"]');
    const testTitle = document.querySelector('[data-test-id="title"]');
    const loadingSkel = document.querySelector('[data-test-id="cf-ui-skeleton-form"]');
    expect(card).toBeVisible();
    expect(testTitle).toHaveTextContent('Some test title');
    expect(loadingSkel).toBeNull();
  });

  it('Shows Missing text if title is missing', () => {
    render(<EntityCard description="Some Description" entityType="Some Entity Type" title="" />);

    const testTitle = document.querySelector('[data-test-id="title"]');
    expect(testTitle).toHaveTextContent('Some Entity Type Missing');
  });

  it('Shows loading skeleton if loading', () => {
    render(
      <EntityCard
        description="Some Description"
        entityType="Some Entity Type"
        title="Some Title"
        loading={true}
      />
    );

    const loadingSkel = document.querySelector('[data-test-id="cf-ui-skeleton-form"]');
    expect(loadingSkel).not.toBeNull();
  });
});
