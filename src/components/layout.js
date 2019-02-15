import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Sidebar from './sidebar'

import './layout.css'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  padding: 20px;
  color: #7e7e7e;
  overflow-x: hidden;
`

const Query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteDescription
        authorName
        authorDescription
      }
    }
  }
`

export default ({ children }) => (
  <StaticQuery
    query={Query}
    render={data => {
      const {
        title,
        siteDescription,
        authorName,
        authorDescription
      } = data.site.siteMetadata
      return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={siteDescription} />
            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="/apple-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="/apple-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="/apple-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/apple-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/apple-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="/apple-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/apple-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="/apple-icon-152x152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/android-icon-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta
              name="msapplication-TileImage"
              content="/ms-icon-144x144.png"
            />
            <meta name="theme-color" content="#ffffff" />
            <title>{title}</title>
          </Helmet>
          <Container>
            <Sidebar
              title={title}
              authorName={authorName}
              authorDescription={authorDescription}
            />
            <Content>{children}</Content>
          </Container>
        </>
      )
    }}
  />
)
