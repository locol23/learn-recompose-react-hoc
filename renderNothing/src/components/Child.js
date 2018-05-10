import React from 'react'
import { compose, setDisplayName, branch, renderNothing } from 'recompose'

const ComponentA = () => <div>A</div>

const checkShowState = ({ show }) => show

const withCheckShowState = branch(
  checkShowState,
  component => component,
  renderNothing
)

const Enhance = compose(setDisplayName('Child'), withCheckShowState)

export default Enhance(ComponentA)
