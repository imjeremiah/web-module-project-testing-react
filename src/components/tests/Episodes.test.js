import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episodes from './../Episodes';

test("renders without error", () => {
    render(<Episodes episodes={[]} />);
});