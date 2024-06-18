import {render,fireEvent, queryByPlaceholderText, screen} from '@testing-library/react'
// import React from 'react'
// import Search from '../src/components/Search/Search'
import '@testing-library/jest-dom'
import App from '../src/App'
import { expect, describe, it } from 'vitest'
import { BrowserRouter } from 'react-router-dom'



describe('title is rendering',()=>{
    it('title is visible', ()=>{
        render(<App/> , {wrapper: BrowserRouter})
        expect(screen.getByText(/Find 🇺🇦 services in Köln 🇩🇪/i)).toBeInTheDocument()
        // screen.debug();
    })
})
