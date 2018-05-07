import React from 'react'
import { compose, setDisplayName, withStateHandlers } from 'recompose'
import Child from './Child'

const ButtonText = props => {
  const handler = () =>
    props.text === 'hoge' ? props.setText('fuga') : props.setText('hoge')
  return (
    <div>
      <button onClick={handler}>Change text state</button>
    </div>
  )
}

const ButtonShow = props => (
  <div>
    <button onClick={props.setShow}>Change show state</button>
  </div>
)

const Component = props => (
  <div>
    <Child {...props} />
    <ButtonText {...props} />
    <div>{String(props.show)}</div>
    <ButtonShow {...props} />
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
