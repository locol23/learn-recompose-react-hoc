import React from 'react'
import { compose, setDisplayName, withStateHandlers } from 'recompose'

const ComponentA = () => <div>A</div>

// Enhance = compose(HoCs, HoCs)
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

export default Enhance(ComponentA) // compose(HoCs, HoCs)(Component)を export している
