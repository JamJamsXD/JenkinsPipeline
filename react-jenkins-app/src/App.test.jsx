
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import App from './App'

describe('React Website Tests', () => {

  it('should display the website title', () => {
    render(<App />)

    expect(
      screen.getByText('My React Website')
    ).toBeInTheDocument()
  })

  it('should increase the counter when clicked', () => {
    render(<App />)

    const button = screen.getByRole('button', {
      name: 'Increase Counter'
    })

    fireEvent.click(button)

    expect(
      screen.getByText('Counter: 1')
    ).toBeInTheDocument()
  })

})
