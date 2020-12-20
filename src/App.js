import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import TextSection from './components/TextSection'
import ExpSection from './components/ExpSection'
import SkillsSection from './components/SkillsSections'
import Divider from './components/Divider'

const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
});

function App() {
    const [page, setPage] = useState(null);

    const isValid = obj => obj !== null && obj !== undefined

    useEffect(
        () => {
            client.getEntries().then(
                response => {
                    if (!isValid(response)) {
                        setPage("");
                        console.error(`Response from contentful was unsuccessful - EC#1.`);
                        return;
                    }

                    const items = response.items;
                    if (!isValid(items) || (isValid(items) && items.length <= 0)) {
                        setPage("");
                        console.error(`Response from contentful was unsuccessful - EC#2.`);
                        return;
                    }

                    const content = items[0];
                    if (!isValid(content)) {
                        setPage("");
                        console.error(`Response from contentful was unsuccessful - EC#3.`);
                        return;
                    }

                    const fields = content[`fields`];
                    if (!isValid(fields)) {
                        setPage("");
                        console.error(`Response from contentful was unsuccessful - EC#4.`);
                        return;
                    }

                    setPage(fields)
                }
            ).catch(
                error => {
                    setPage("");
                    console.error(`Response from contentful was unsuccessful - EC#5.`);
                    console.error(error);
                }
            );
        }, []
    );

    if (!page || page === "") {
        return "Failed to load. Please check the console to see why. Try refreshing.";
    }

    return (
        <Root>
            <Container>
                <TextSection
                    title={page[`mainTitle`]}
                    sentences={page[`objective`]}
                />
                <Divider/>
                <MiddleSection>
                    <ExpSection
                        title={page[`experienceTitle`]}
                        subtext={page[`experienceSubtext`]}
                        exp={page[`jobs`]}
                    />
                    <SkillsSection
                        title={page[`skillsTitle`]}
                        current={page[`currentSkills`]}
                        other={page[`otherSkills`]}
                    />
                </MiddleSection>
                <Divider/>
                <TextSection
                    title={page[`moreAboutMeTitle`]}
                    sentences={page[`moreAboutMe`]}
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
