

import { render } from '@testing-library/react';

import EntityForm from './EntityForm';

describe('EntityForm component', () => {
    it('Renders', () => {
        render(
            <EntityForm
                entityType="Some Entity Type"
                list={[]}
            />
        );

        const form = document.querySelector('#EntityForm');
        expect(form).toBeVisible();
    });
});