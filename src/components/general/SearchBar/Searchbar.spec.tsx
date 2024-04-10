import { render, fireEvent, waitFor, act } from '@testing-library/react';
import SearchBar, { SearchBarProps } from './SearchBar';

describe('SearchBar', () => {
  const mockOnSearch = jest.fn();
  const defaultProps: SearchBarProps = {
    groupFilters: [{ label: 'All', value: 'all' }],
    filterFacets: [],
    onSearch: mockOnSearch,
    searchTitle: 'Search',
    placeholder: 'Search',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    const { getByLabelText } = render(<SearchBar {...defaultProps} />);
    expect(getByLabelText(defaultProps.searchTitle!)).toBeInTheDocument();
  });

  it('initializes with correct initial state', () => {
    const { getByLabelText } = render(<SearchBar {...defaultProps} />);
    const searchInput = getByLabelText(defaultProps.searchTitle!) as HTMLInputElement;

    expect(searchInput.value).toBe('');
    expect(searchInput.placeholder).toBe(defaultProps.placeholder);
  });

  it('calls onSearch with the correct searchParams after user input', async () => {
    jest.useFakeTimers();

    const { getByLabelText } = render(<SearchBar {...defaultProps} />);
    const searchInput = getByLabelText(defaultProps.searchTitle!);

    fireEvent.change(searchInput, { target: { value: 'test' } });

    act(() => {
      jest.advanceTimersByTime(400);
    });

    await waitFor(() => expect(mockOnSearch).toHaveBeenCalledTimes(2));
    expect(mockOnSearch).toHaveBeenCalledWith({
      selectedGroupFilter: defaultProps.groupFilters![0].value,
      searchValue: 'test',
      selectedFilterFacets: [],
    });

    jest.useRealTimers();
  });

  it('debounces search input', async () => {
    jest.useFakeTimers();

    const { getByLabelText } = render(<SearchBar {...defaultProps} />);
    const searchInput = getByLabelText(defaultProps.searchTitle!);

    fireEvent.change(searchInput, { target: { value: 't' } });
    fireEvent.change(searchInput, { target: { value: 'te' } });
    fireEvent.change(searchInput, { target: { value: 'tes' } });
    fireEvent.change(searchInput, { target: { value: 'test' } });

    act(() => {
      jest.advanceTimersByTime(400);
    });

    await waitFor(() => expect(mockOnSearch).toHaveBeenCalledTimes(2));
    expect(mockOnSearch).toHaveBeenCalledWith({
      selectedGroupFilter: defaultProps.groupFilters![0].value,
      searchValue: 'test',
      selectedFilterFacets: [],
    });

    jest.useRealTimers();
  });

  it('accepts an optional prop of `isDisabled`', async () => {
    const { getByLabelText } = render(<SearchBar {...defaultProps} isDisabled={true} />);
    const searchInput = getByLabelText(defaultProps.searchTitle!) as HTMLInputElement;

    expect(searchInput).toBeDisabled();
  });
});
