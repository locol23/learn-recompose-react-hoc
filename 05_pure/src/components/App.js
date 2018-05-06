import React from 'react'
import { compose, setDisplayName, withStateHandlers } from 'recompose'
import Child from './Child'

const Component = ({ text }) => (
  <div>
    <Child text={text} />
  </div>
)

const Enhance = compose(
  setDisplayName('App'),
  withStateHandlers(
    {
      text: 'hoge',
      show: false,
    },
    {
      setText: () => t => ({ text: t }),
      setShow: ({ show }) => () => ({ show: !show }),
    }
  )
)

export default Enhance(Component)
