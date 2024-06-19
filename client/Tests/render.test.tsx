import { render,screen,fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'
import { expect, describe, it } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Map from '../src/components/Map/Map'
import mockContext from './Mocks/mockContext'
import { BusinessContext } from '../src/context/BusinessContext'

const renderWithContext = (component: any, contextValue: any) => {
    return render(
        <BusinessContext.Provider value={contextValue}>
            {component}
        </BusinessContext.Provider>
    )
}

describe('Detail button', () => {
    it('Detail button displays proplerly', async () => {
        renderWithContext(<Map />, mockContext);

        const icon =await screen.getByTestId('Kyiv Food Market')
        fireEvent.click(icon)

        expect(
          await  screen.findByRole("button", { name: "Details" })
        ).toBeInTheDocument();

    })
})


describe('title is rendering', () => {
    it('title is visible', () => {
        render(<App />, { wrapper: BrowserRouter })
        expect(screen.getByText(/Find 🇺🇦 services in Köln 🇩🇪/i)).toBeInTheDocument()
        // screen.debug();
    })

})

