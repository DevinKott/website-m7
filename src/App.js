import React from 'react'
import styled from 'styled-components'

import TextSection from './components/TextSection'
import ExpSection from './components/ExpSection'
import SkillsSection from './components/SkillsSections'
import Divider from './components/Divider'

import {
    MAIN_TITLE,
    MAIN_OBJECTIVE,
    MORE_ABOUT_ME_TITLE,
    MORE_ABOUT_ME_SENTENCES,
    EXP_TITLE,
    EXP_SUBTEXT,
    EXP,
    SKILLS_TITLE,
    SKILLS_CURRENT,
    SKILLS_OTHER
} from './components/text'

function App() {
    return (
        <Root>
            <Container>
                <TextSection
                    title={MAIN_TITLE}
                    sentences={MAIN_OBJECTIVE}
                />
                <Divider/>
                <MiddleSection>
                    <ExpSection
                        title={EXP_TITLE}
                        subtext={EXP_SUBTEXT}
                        exp={EXP}
                    />
                    <SkillsSection
                        title={SKILLS_TITLE}
                        current={SKILLS_CURRENT}
                        other={SKILLS_OTHER}
                    />
                </MiddleSection>
                <Divider/>
                <TextSection
                    title={MORE_ABOUT_ME_TITLE}
                    sentences={MORE_ABOUT_ME_SENTENCES}
                />
            </Container>
        </Root>
    );
}

const MiddleSection = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`

const Container = styled.section`
    max-width: 640px;

    margin: 2rem 2rem 2rem 2rem;
    width: calc(100% - 4rem);
`

const Root = styled.main`
    letter-spacing: 0.025em;
    line-height: 1.4rem;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        line-height: 1.7rem;
    }
`

export default App;
