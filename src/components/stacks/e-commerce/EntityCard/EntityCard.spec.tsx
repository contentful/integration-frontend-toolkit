import React from 'react';
import { render } from '@testing-library/react';

import EntityCard from './EntityCard';

describe('LineChart component', () => {
    it('mounts', () => {
        render(
            <EntityCard
            />
        );

        const chart = document.querySelector('canvas');

        expect(chart).toBeVisible();
        expect(chart).toHaveAccessibleName('Analytics line chart');
    });
});
