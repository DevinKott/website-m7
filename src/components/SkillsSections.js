import React from 'react'
import styled from 'styled-components'

function SkillsSection(props) {
    const title = props.title || `Error`;
    const current = props.current || []
    const other = props.other || []

    return (
        <Root>
            <h2>{title}</h2>
            <h3>Current Skills</h3>
            <ul>
                {
                    current.map(
                        (skill) => {
                            const name = skill[`name`]
                            // const info = skill[`info`]

                            return (
                                <li>{name}</li>
                            )
                        }
                    )
                }
            </ul>

            <h3>Other Skills</h3>
            <ul>
                {
                    other.map(
                        (skill) => {
                            const name = skill[`name`]
                            // const info = skill[`info`]

                            return (
                                <li>{name}</li>
                            )
                        }
                    )
                }
            </ul>
        </Root>
    );
}

const Root = styled.section`
    display: flex;
    flex-direction: column;

    flex: 1;
`

export default SkillsSection;