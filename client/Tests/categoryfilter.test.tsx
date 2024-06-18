import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import { expect, describe, it } from 'vitest'
import { BusinessContext } from "../src/context/BusinessContext";
import BusinessList from "../src/components/BusinessList/BusinessList";
import mockContext from "./Mocks/mockContext";
import CategoryFilter from "../src/components/CategoryFilter/CategoryFilter";

const renderWithContext = (component: any, contextValue: any) => {
    return render (
        <BusinessContext.Provider value={contextValue}>
            {component}
        </BusinessContext.Provider>
    )
}

describe('Business List', () => {
    it('list renders categories correctly', () => {
        renderWithContext(<BusinessList />, mockContext);
        
        expect(screen.getByText('Grocery Stores')).toBeInTheDocument();
        expect(screen.getByText('Health')).toBeInTheDocument();
    })
    it('list renders businesses correctly', () => {
        renderWithContext(<BusinessList />, mockContext);
        
        expect(screen.getByText('Lviv Cafe')).toBeInTheDocument();
        expect(screen.getByText('Kyiv Food Market')).toBeInTheDocument();
    })
})

describe('Category filter', () => {
    it('lists renders categories correctly', () => {
        renderWithContext(<CategoryFilter />, mockContext);

        expect(screen.getByText('all')).toBeInTheDocument();
        expect(screen.getByText('Restaurants')).toBeInTheDocument();
        expect(screen.getByText('Health')).toBeInTheDocument();
        expect(screen.getByText('Beauty')).toBeInTheDocument();
        expect(screen.getByText('Grocery Stores')).toBeInTheDocument();
    })

    it('filters businesses by the category', () => {
        renderWithContext(<CategoryFilter />, mockContext);

        const allButton = screen.getByText('all');
        const healthButton = screen.getByText('Health')

        fireEvent.click(allButton);
        expect(mockContext.setFilteredBusinesses).toHaveBeenCalledWith(mockContext.businesses);

        fireEvent.click(healthButton);
        expect(mockContext.setFilteredBusinesses).toHaveBeenCalledWith(
            mockContext.businesses.filter(b => b.category === 'Health')
            )
        });


    })
