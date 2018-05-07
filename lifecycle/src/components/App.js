import React from 'react'
import {
  compose,
  setDisplayName,
  withStateHandlers,
  lifecycle,
} from 'recompose'

const Component = () => <div>Component</div>

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
  ),
  lifecycle({
    componentDidMount() {
      this.props.setText('fuga')
      this.props.setShow()
    },
  })
)

export default Enhance(Component)
