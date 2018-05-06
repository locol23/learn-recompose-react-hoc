import React from 'react'
import { setDisplayName } from 'recompose'

const ComponentA = () => <div>A</div>

export default setDisplayName('App')(ComponentA)
