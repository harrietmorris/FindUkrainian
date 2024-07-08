import {render,fireEvent, queryByPlaceholderText, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'
import { expect, describe, it } from 'vitest'
import { BrowserRouter } from 'react-router-dom'



describe('title is rendering',()=>{
    it('title is visible', ()=>{
        render(<App/> , {wrapper: BrowserRouter})
        expect(screen.getByText(/Find 🇺🇦 services in Köln 🇩🇪/i)).toBeInTheDocument()
    })
})
