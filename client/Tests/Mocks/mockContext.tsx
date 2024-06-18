import mockCategories from "./mockCategories";
import mockBusinesses from "./mockBusiness";
import {vi} from 'vitest'

const mockContext = {
    businesses: mockBusinesses,
    setBusinesses: vi.fn(),
    filteredBusinesses: mockBusinesses,
    setFilteredBusinesses: vi.fn(),
    categories: mockCategories,
    setCategories: vi.fn(),
    selectedCategory: null,
    setSelectedCategory: vi.fn(),
    businessId: null,
    setBusinessId: vi.fn(),

}

export default mockContext