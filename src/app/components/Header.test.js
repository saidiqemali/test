import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import * as test from "node:test";
import expect from "expect";
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
    test('renders the header with navigation links', () => {
        render(<Header />);

        // Überprüfen, ob der Titel der Anwendung gerendert wird
        const titleElement = screen.getByText(/Einkaufsliste App/i);
        expect(titleElement).toBeInTheDocument();

        // Überprüfen, ob die Links vorhanden sind
        const createListLink = screen.getByText(/Neue Liste erstellen/i);
        const joinListLink = screen.getByText(/Liste beitreten/i);
        const viewListLink = screen.getByText(/Einkaufsliste anzeigen/i);

        expect(createListLink).toBeInTheDocument();
        expect(joinListLink).toBeInTheDocument();
        expect(viewListLink).toBeInTheDocument();
    });

    test('links point to the correct pages', () => {
        render(<Header />);

        // Überprüfen der href-Attribute der Links
        const createListLink = screen.getByText(/Neue Liste erstellen/i);
        const joinListLink = screen.getByText(/Liste beitreten/i);
        const viewListLink = screen.getByText(/Einkaufsliste anzeigen/i);

        expect(createListLink.closest('a')).toHaveAttribute('href', '/register');
        expect(joinListLink.closest('a')).toHaveAttribute('href', '/join');
        expect(viewListLink.closest('a')).toHaveAttribute('href', '/list');
    });
});