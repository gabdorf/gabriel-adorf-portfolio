import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

import Logo from 'components/projectlogo'

const ProjectWrapper = styled.div`
  padding-bottom: 100px;
  display: flex;
  @media (max-width: 660px) {
    flex-wrap: wrap;
  }
  &:last-of-type {
    padding-bottom: 0px;
  }
`

const Description = styled.div`
  @media (max-width: 660px) {
    margin-top: 32px;
  }
`

const Title = styled.h3`
  font-size: ${fontSize.f6};
  font-weight: 700;
  ${media.md`
    font-size: ${fontSize.f6};
  `}
  margin: 0 0 16px 0;
`

const Abstract = styled.div`
  margin-bottom: 16px;
`

function Project(props) {
  return (
    <ProjectWrapper>
      <Logo>{props.logo}</Logo>
      <Description>
        <Title>{props.title}</Title>
        <Abstract>{props.abstract}</Abstract>
        {props.link}
      </Description>
    </ProjectWrapper>
  )
}

export default Project
