import { render, fireEvent, queryByPlaceholderText, screen } from '@testing-library/react'
// import React from 'react'
// import Search from '../src/components/Search/Search'
import '@testing-library/jest-dom'
import App from '../src/App'
import { expect, describe, it } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Map from '../src/components/Map/Map'
import { MapContainer } from 'react-leaflet'


describe('title is rendering', () => {
    it('title is visible', () => {
        render(<App />, { wrapper: BrowserRouter })
        expect(screen.getByText(/Find 🇺🇦 services in Köln 🇩🇪/i)).toBeInTheDocument()
        // screen.debug();
    })

    // it('should render the map', async () => {
    //     const { container } = render(<Map />);
    //     const mapContainer = container.querySelector('.leaflet-container');
    //     expect(await mapContainer).toBeInTheDocument();

    // });

    it('check detail button', async () => {
        render(<Map />);
        
        expect(
            await screen.findByRole("button",{name:"Details"})
        ).toBeInTheDocument();

    });

})

