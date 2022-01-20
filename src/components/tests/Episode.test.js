import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testData = {
    summary: 'test summary',
};

const testImage = {
    image: null,
};

test("renders without error", () => {
    render(<Episode episode={{}} />);
});

test("renders the summary test passed as prop", () => {
    render(<Episode episode={testData} />);

    const summary = screen.getByText(/test summary/i);

    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).not.toBeNull();
});

test("renders default image when image is not defined", () => {
    render(<Episode episode={testImage} />);

    const imageAlt = screen.getByAltText(/stranger-things.png/i);
    
    expect(imageAlt).toBeInTheDocument();

});
