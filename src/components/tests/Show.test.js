import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testData = {
    name: 'test name', 
    summary: 'test summary',
    seasons: [
        {
            id: 1,
            name: 'season 1',
            episodes: [],
        },
        {
            id: 2,
            name: 'season 2',
            episodes: [],
        },
    ]
}

test('renders without errors', () => {
    render(<Show show={testData} selectedSeason={'none'} />);
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} />);

    const loading = screen.getByTestId(/loading-container/i);

    expect(loading).toBeInTheDocument();

});


test('renders same number of options seasons are passed in', () => {

    render(<Show show={testData} selectedSeason={'none'} />);

    const seasons = screen.getAllByTestId(/season-option/i);

    expect(seasons).toHaveLength(2);

});

test('handleSelect is called when an season is selected', () => {
    const mockHandleSelect = jest.fn();

    render(<Show show={testData} selectedSeason={'none'} handleSelect={mockHandleSelect} />);

    userEvent.selectOptions(screen.getByRole(/combobox/i), ['1']);

    expect(mockHandleSelect).toHaveBeenCalled();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render(<Show show={testData} selectedSeason={'none'} />);

    let episodes = screen.queryByTestId(/episodes-container/i);

    expect(episodes).not.toBeInTheDocument();

    rerender(<Show show={testData} selectedSeason={1} />);

    episodes = screen.queryByTestId(/episodes-container/i);

    expect(episodes).toBeInTheDocument();



});
