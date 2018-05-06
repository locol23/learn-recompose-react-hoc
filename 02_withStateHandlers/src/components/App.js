import React from 'react'
import { withStateHandlers, setDisplayName } from 'recompose'

const ComponentA = () => <div>A</div>

export default setDisplayName('App')(
  withStateHandlers(
    {
      text: 'hoge',
      show: false,
    },
    {
      setText: () => t => ({ text: t }),
      setShow: ({ show }) => () => ({ show: !show }),
    }
  )(ComponentA)
)
