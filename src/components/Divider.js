import React from 'react'
import styled from 'styled-components'

function Divider() {
    return <SeparatorCSS/>
}

const SeparatorCSS = styled.hr`
    margin: 0;
    margin-top: 1rem;
    border-top-width: 1px;
    border-style: solid;
    border-color: #e2e8f0;
`

export default Divider;