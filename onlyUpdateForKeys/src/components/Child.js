import React from 'react'
import { compose, setDisplayName, onlyUpdateForKeys } from 'recompose'

const Component = props => (
  <div>
    {props.text}
    {console.log('Child Component')}
  </div>
)

const Enhance = compose(setDisplayName('Child'), onlyUpdateForKeys(['text']))

export default Enhance(Component)
