import React from 'react'
import styled from 'styled-components'

import TextSection from './components/TextSection'
import ExpSection from './components/ExpSection'

import {
    MAIN_TITLE,
    MAIN_OBJECTIVE,
    MORE_ABOUT_ME_TITLE,
    MORE_ABOUT_ME_SENTENCES,
    EXP_TITLE,
    EXP_SUBTEXT,
    EXP
} from './components/text'

function App() {
    return (
        <Root>
            <Container>
                <TextSection
                    title={MAIN_TITLE}
                    sentences={MAIN_OBJECTIVE}
                    separator={true}
                />
                <ExpSection
                    title={EXP_TITLE}
                    subtext={EXP_SUBTEXT}
                    exp={EXP}
                />
                <TextSection
                    title={MORE_ABOUT_ME_TITLE}
                    sentences={MORE_ABOUT_ME_SENTENCES}
                />
            </Container>
        </Root>
    );
}

const Container = styled.section`
    max-width: 640px;

    margin: 2rem 2rem 2rem 2rem;
    width: calc(100% - 4rem);
`

const Root = styled.main`
    letter-spacing: 0.025em;
    line-height: 1.3rem;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default App;
