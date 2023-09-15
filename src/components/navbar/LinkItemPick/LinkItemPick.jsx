import React from 'react'
import { LinkItemPickStyled } from './LinkItemPickStyled'

const LinkItemPick = ({children}) => {
  return (
    <LinkItemPickStyled to={to}>
    {children}
    </LinkItemPickStyled>
  )
}

export default LinkItemPick