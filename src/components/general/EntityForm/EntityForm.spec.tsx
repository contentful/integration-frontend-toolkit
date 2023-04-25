

import { fireEvent, render } from '@testing-library/react';

import EntityForm from './EntityForm';
import { act } from 'react-dom/test-utils';
import { SELECT_TYPE } from '../Entity.types';

describe('EntityForm component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Renders', () => {
        const { getByTestId } = render(
            <EntityForm
                entityType="Some Entity Type"
                list={[]}
                selectType={SELECT_TYPE.MULTIPLE}
            />
        );
        const form = getByTestId('cf-ui-form-label');
        const searchBar = getByTestId('cf-ui-text-input')

        expect(form).toBeVisible();
        expect(searchBar).toBeVisible()
    });

    it('On search input, show list of cards', async () => {
        jest.useFakeTimers();

        const { getByTestId, getAllByTestId } = render(
            <EntityForm
                entityType="Some Entity Type"
                list={[{
                    title: 'Some matched Title',
                    description: 'some descriptions',
                    entityType: 'Some Entity Type'
                },
                {
                    title: 'Some regular Title',
                    description: 'some descriptions',
                    entityType: 'Some Entity Type'
                },
                {
                    title: 'Some matched Title',
                    description: 'some descriptions',
                    entityType: 'Some Entity Type'
                }]}
                selectType={SELECT_TYPE.MULTIPLE}
            />
        );

        const searchInput = getByTestId('cf-ui-text-input');
        fireEvent.change(searchInput, { target: { value: 'matched' } });

        act(() => {
            jest.advanceTimersByTime(400);
        });

        const cards = getAllByTestId('entity-card');
        expect(cards.length).toEqual(2);

        jest.useRealTimers();

    })
});