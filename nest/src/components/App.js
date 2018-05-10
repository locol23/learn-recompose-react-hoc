import React from 'react'
import { compose, setDisplayName, withStateHandlers, nest } from 'recompose'

const Parent = props => <div>{props.children}</div>

const ChildA = props => <div>{props.children}</div>

const ChildB = props => <div>{props.text}</div>

const Component = nest(Parent, ChildA, ChildB)

const Enhance = compose(
  setDisplayName('App'),
  withStateHandlers({ text: 'hoge' })
)

export default Enhance(Component)
