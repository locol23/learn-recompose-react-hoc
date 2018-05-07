import React from 'react'
import { compose, setDisplayName, branch, renderComponent } from 'recompose'

const ComponentA = () => <div>A</div>

const ComponentB = () => <div>B</div>

const checkShowState = ({ show }) => show

const withCheckShowState = branch(
  checkShowState,
  component => component,
  renderComponent(ComponentB)
)

const Enhance = compose(setDisplayName('Child'), withCheckShowState)

export default Enhance(ComponentA)
