import { render } from '@testing-library/react';

import EntityCardList from './EntityCardList';

describe('EntityCard component', () => {
    it('Renders', () => {
        render(
            <EntityCardList
                entityType='Some Entity Type'
                list={[{
                    title: 'Some Test Title',
                    description: 'Some Test Description',
                    entityType: 'Some Test Entity Type',
                    contentType: 'Some Test Content Type',
                    thumbnail: ''
                }]}
            />
        );

        const card = document.querySelector('#EntityCardList');
        expect(card).toBeVisible();
    });

    it('If no title is provided, show a card with missing label', () => {
        render(
            <EntityCardList
                entityType='Failed'
                list={[{
                    title: '',
                    description: 'Some Test Description',
                    entityType: 'Some Test Entity Type',
                    contentType: 'Some Test Content Type',
                    thumbnail: ''
                }]}
            />
        );

        const missingCards = document.querySelectorAll('[data-test-id="missing"]')
        expect(missingCards.length).toBeGreaterThan(0);
    })

    it('Shows several cards', () => {
        render(
            <EntityCardList
                entityType='Failed'
                list={[{
                    title: 'Some Test Title',
                    description: 'Some Test Description',
                    entityType: 'Some Test Entity Type',
                    contentType: 'Some Test Content Type',
                    thumbnail: ''
                },
                {
                    title: 'Some Test Title 2',
                    description: 'Some Test Description 2',
                    entityType: 'Some Test Entity Type 2',
                    contentType: 'Some Test Content Type 2',
                    thumbnail: ''
                },
                {
                    title: 'Some Test Title 3',
                    description: 'Some Test Description 3',
                    entityType: 'Some Test Entity Type 3',
                    contentType: 'Some Test Content Type 3',
                    thumbnail: ''
                }]}
            />
        );

        const missingCards = document.querySelectorAll('[data-test-id="entity-card"]')
        expect(missingCards.length).toBeLessThanOrEqual(3);
    })

    it('Shows a message if no data is available', () => {
        render(
            <EntityCardList
                entityType='Failed'
                list={[]}
            />
        );

        const missingCards = document.querySelectorAll('[data-test-id="entity-card"]')
        const noCardsMessage = document.querySelectorAll('[data-test-id="no-cards"]')
        expect(missingCards.length).toBeLessThanOrEqual(0);
        expect(noCardsMessage).not.toBeNull();
    })

    it('Shows an error if an error is provided', () => {
        render(
            <EntityCardList
                entityType='Failed'
                list={[{
                    title: '',
                    description: 'Some Test Description',
                    entityType: 'Some Test Entity Type',
                    contentType: 'Some Test Content Type',
                    thumbnail: ''
                }]}
                error={true}
            />
        );

        const missingCards = document.querySelectorAll('[data-test-id="entity-card"]')
        const cardsError = document.querySelectorAll('[data-test-id="cards-error"]')
        expect(missingCards.length).toBeLessThanOrEqual(0);
        expect(cardsError).not.toBeNull();
    })
});