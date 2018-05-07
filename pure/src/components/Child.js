import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'

const Component = ({ text }) => (
  <div>
    {text}
    {console.log('render Child Component')}
  </div>
)

const Enhance = compose(setDisplayName('Child'), pure)

export default Enhance(Component)
