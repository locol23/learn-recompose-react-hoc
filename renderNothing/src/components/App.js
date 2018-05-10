import React from 'react'
import { compose, setDisplayName, withStateHandlers } from 'recompose'
import Child from './Child'

const ButtonShow = props => (
  <div>
    <button onClick={props.setShow}>Change show state</button>
  </div>
)

const Component = props => (
  <div>
    <Child {...props} />
    <ButtonShow {...props} />
  </div>
)

const Enhance = compose(
  setDisplayName('App'),
  withStateHandlers(
    {
      text: 'hoge',
      show: true,
    },
    {
      setText: () => t => ({ text: t }),
      setShow: ({ show }) => () => ({ show: !show }),
    }
  )
)

export default Enhance(Component)
