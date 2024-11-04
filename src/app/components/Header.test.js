import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import * as test from "node:test";
import expect from "expect";
import '@testing-library/jest-dom/extend-expect';
import {jest} from "globals";

// Mocken von Next.js Link-Komponenten
jest.mock('next/link', () => {
    return ({ children }) => {
        return children;
    };
});

describe('Header Component', () => {
    test('renders Header with navigation links', () => {
        render(<Header />);

        // Überprüfen, ob die Links in der Header-Komponente gerendert werden
            expect(screen.getByText(/Einkaufsliste App/i)).toBeInTheDocument();
        expect(screen.getByText(/Neue Liste erstellen/i)).toBeInTheDocument();
        expect(screen.getByText(/Liste beitreten/i)).toBeInTheDocument();
        expect(screen.getByText(/Einkaufsliste anzeigen/i)).toBeInTheDocument();
    });

    test('checks the links have correct hrefs', () => {
        render(<Header />);

        const homeLink = screen.getByText(/Einkaufsliste App/i).closest('a');
        const registerLink = screen.getByText(/Neue Liste erstellen/i).closest('a');
        const joinLink = screen.getByText(/Liste beitreten/i).closest('a');
        const listLink = screen.getByText(/Einkaufsliste anzeigen/i).closest('a');

        expect(homeLink).toHaveAttribute('href', '/');
        expect(registerLink).toHaveAttribute('href', '/register');
        expect(joinLink).toHaveAttribute('href', '/join');
        expect(listLink).toHaveAttribute('href', '/list');
    });
});
