import { render } from '@testing-library/react';

import EntityCardList from './EntityCardList';
import { SELECT_TYPE } from '../Entity.types';

describe('EntityCard component', () => {
    it('Renders', () => {
        render(
            <EntityCardList
                selected={[]}
                entityType='Some Entity Type'
                selectType={SELECT_TYPE.MULTIPLE}
                list={[{
                    title: 'Some Test Title',
                    description: 'Some Test Description',
                    entityType: 'Some Test Entity Type',
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
                selected={[]}
                entityType='Failed'
                selectType={SELECT_TYPE.MULTIPLE}
                list={[{
                    title: '',
                    description: 'Some Test Description',
                    entityType: 'Some Test Entity Type',
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
                selected={[]}
                entityType='Failed'
                selectType={SELECT_TYPE.MULTIPLE}
                list={[{
                    title: 'Some Test Title',
                    description: 'Some Test Description',
                    entityType: 'Some Test Entity Type',
                    thumbnail: ''
                },
                {
                    title: 'Some Test Title 2',
                    description: 'Some Test Description 2',
                    entityType: 'Some Test Entity Type 2',
                    thumbnail: ''
                },
                {
                    title: 'Some Test Title 3',
                    description: 'Some Test Description 3',
                    entityType: 'Some Test Entity Type 3',
                    thumbnail: ''
                }]}
            />
        );

        const missingCards = document.querySelectorAll('[data-test-id="entity-card"]')
        expect(missingCards.length).toEqual(3);
    })

    it('Shows a message if no data is available', () => {
        render(
            <EntityCardList
                selected={[]}
                entityType='Failed'
                list={[]}
                selectType={SELECT_TYPE.MULTIPLE}
            />
        );

        const missingCards = document.querySelectorAll('[data-test-id="entity-card"]')
        const noCardsMessage = document.querySelectorAll('[data-test-id="no-cards"]')
        expect(missingCards.length).toEqual(0);
        expect(noCardsMessage).not.toBeNull();
    })

    it('Shows an error if an error is provided', () => {
        render(
            <EntityCardList
                selected={[]}
                entityType='Failed'
                selectType={SELECT_TYPE.MULTIPLE}
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
        expect(missingCards.length).toEqual(0);
        expect(cardsError).not.toBeNull();
    })
});