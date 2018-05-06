import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'

const Component = props => <div>{props.text}</div>

const Enhance = compose(setDisplayName('Child'), pure)

export default Enhance(Component)
