import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';

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

test('renders without errors with no props', () => {
    render(<Display />);
});

test('renders Show component when the button is clicked ', async ()=> {
    render(<Display />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const show = await screen.findByTestId(/show-container/i);

    expect(show).toBeInTheDocument();

});

test('renders show season options matching your data when the button is clicked', async () => {
    render(<Display show={testData} />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const seasons = await screen.findAllByTestId(/season-option/i);

    expect(seasons).toHaveLength(4);
});
