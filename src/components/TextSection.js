import React from 'react'
import styled from 'styled-components'

function TextSection(props) {
    let title = props.title || `Error`;
    let sentences = props.sentences || []

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
        </Root>
    );

}

const Root = styled.section`

`

const TitleCSS = styled.h2`

`

const SentenceCSS = styled.span`

`

export default TextSection;