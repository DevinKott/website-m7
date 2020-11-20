import React from 'react'
import styled from 'styled-components'

function TextSection(props) {
    let title = props.title || `Error`;
    let sentences = props.sentences || []
    let includeSep = props.separator || false

    return (
        <Root>
            <TitleCSS>{title}</TitleCSS>
            {
                sentences.map(
                    (sentence, index) => {
                        if (index !== sentences.length - 1) {
                            sentence += " ";
                        }

                        return (
                            <SentenceCSS dangerouslySetInnerHTML={{
                                __html: sentence
                            }}/>
                        )
                    }
                )
            }
            {
                includeSep &&
                <SeparatorCSS/>
            }
        </Root>
    );

}

const Root = styled.section`

`

const TitleCSS = styled.h2`

`

const SentenceCSS = styled.span`

`

const SeparatorCSS = styled.hr`
    margin: 0;
    margin-top: 1rem;
    border-top-width: 1px;
    border-style: solid;
    border-color: #e2e8f0;
`

export default TextSection;