import React from 'react'
import styled from 'styled-components'

function ExpSection(props) {
    const sectionTitle = props.title || `Experience`;
    const sectionSubtext = props.subtext || ``;
    const exp = props.exp || []

    return (
        <Root>
            <h2>{sectionTitle}</h2>
            <span>{sectionSubtext}</span>
            {
                exp.map(
                    (obj) => {
                        const title = obj[`title`] || `ERROR`
                        const company = obj[`company`] || `ERROR`
                        const dates = obj[`dates`] || `ERROR`

                        return (
                            <ExpCSS>
                                <h3>{title}</h3>
                                <span>{company}</span>
                                <span>{dates}</span>
                            </ExpCSS>
                        )
                    }
                )
            }
        </Root>
    );
}

const ExpCSS = styled.div`
    display: flex;
    flex-direction: column;
`

const Root = styled.section`
    flex: 1;
    margin-right: 2rem;
`

export default ExpSection;