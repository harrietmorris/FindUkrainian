import {render, screen, waitFor} from '@testing-library/react';
import { expect, describe, it } from 'vitest'
import { BusinessContext } from "../src/context/BusinessContext";
import mockContext from "./Mocks/mockContext";
import BusinessDetail from "../src/components/BusinessDetail/BusinessDetail";
import Map from '../src/components/Map/Map';
import { mock } from 'node:test';


const renderWithContext = (component: any, contextValue: any) => {
    return render (
        <BusinessContext.Provider value={contextValue}>
            {component}
        </BusinessContext.Provider>
    )
}


describe('business detail page', () => {
    it('renders business details correctly', async () => {
        const mockBusiness = mockContext.businesses[0]
        renderWithContext(<BusinessDetail business={mockBusiness} />, mockContext )

        await waitFor(() => {
        expect(screen.getByText('Kyiv Food Market')).toBeInTheDocument();
        expect(screen.getByText(/Kyiv Food Market is a culinary oasis where traditional Ukrainian recipes/)).toBeInTheDocument();
        expect(screen.getByText('Monday')).toBeInTheDocument();
        })

    })
    

})
