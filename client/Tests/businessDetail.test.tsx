import {render, screen, waitFor} from '@testing-library/react';
import { expect, describe, it } from 'vitest'
import { BusinessContext } from "../src/context/BusinessContext";
import mockContext from "./Mocks/mockContext";
import BusinessDetail from "../src/components/BusinessDetail/BusinessDetail";
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
import BusinessDetailPage from '../src/pages/BusinessDetailPage/BusinessDetailPage';
import App from '../src/App';


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

    it('back button should exist', () => {
        const {getByTestId} = render(
            <BusinessDetailPage/>, {wrapper: BrowserRouter} 

        )

        // const mockBusiness = mockContext.businesses[0]
        // renderWithContext(<BusinessDetailPage />, mockBusiness)

            expect(getByTestId("backButton")).toBeVisible();


    })
})

    // it("back button should navigate to home page", () => {
    //     const user = userEvent.setup();
    //     renderWithContext(<BusinessDetail business={mockContext.businesses} />, mockContext )

    //     render(<BusinessDetail business={mockContext.businesses} />, { wrapper: BrowserRouter });
    //     user.click(screen.getByText(/Back to map/i));
    //     expect(screen.getByTestId("home-element")).toBeInTheDocument();
    //   });
    // });
  
//     <Button
//     className="detail-btn"
//     component={Link}
//     to={"/"}
//     variant="contained"
//     startIcon={<ArrowBackIcon />}
//   >
//     Back to map
//   </Button>

