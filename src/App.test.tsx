import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(() => {
    cleanup()
})

describe('Sample App vitest', () => {
    it('the title is visible', () => {
        render(<App />)
        expect(document.querySelector('.text-xl')?.textContent).toBe('Hii')
    })
})
