import styled from 'styled-components'

export const PostsContainer = styled.section `
    height: 100vh;
    display: grid;
    grid-auto-rows: 400px;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    justify-content: center;
    max-width: 1000px;
`

export const Post = styled.article `
    max-width: 800px;
`