import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// suppress annoying jest error output by stubbing console.error during tests
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  jest.spyOn(console, 'error').mockRestore();
});

configure({
  testIdAttribute: 'data-test-id',
});
