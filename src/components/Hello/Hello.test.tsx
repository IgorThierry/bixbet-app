import React from 'react'
import { render, screen } from '@testing-library/react-native'
import renderer from 'react-test-renderer'

import { Hello } from '.'

describe('<Hello />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Hello />)
    expect(tree).toBeTruthy()
  })
  it('renders the correct text', () => {
    render(<Hello />)
    const element = screen.getByText(
      'Open up App.js to start working on your app!',
    )
    expect(element).toBeTruthy()
  })
})
