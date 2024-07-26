import React from 'react'
import NavigationLink from './shared/NavigationLink'

export const Home = () => {
  return (
    <div>
    <div>Home</div>
    <NavigationLink
                bg="#AE9D99"
                to="/allEvents"
                text="View All Events"
                textColor="black"
              />
    </div>
  )
}
