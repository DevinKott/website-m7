import React from 'react'
import styled from 'styled-components'

function TextSection(props) {
    let title = props.title || `Error`;
    let content = props.sentences || `Error`

    return (
        <Root>
            <TitleCSS>{title}</TitleCSS>
            <span dangerouslySetInnerHTML={{__html: content}}/>
        </Root>
    );

}

const Root = styled.section`

`

const TitleCSS = styled.h2`

`

export default TextSection;