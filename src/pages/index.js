import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"


// styles
const pageStyles = {
  color: "#232129",
  padding: "100px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#18344C",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const mainContainer = {
  color: "#B6CEDE",
  backgroundColor: "#B6CEDE",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  justifySelf: "center",
  borderRadius: "36px",
  background: "#18344C",
  boxShadow: "11px 11px 22px #142c41, -11px -11px 22px #1c3c57",
}

const linkStyle = {
  marginTop: "10px",
  color: "inherit",
  textDecoration: "none",
}

const albumsList = (data) => {
  return data.map((album) => {
    return (
      <div key={album.id}>
        <h1>
          {album.title}
        </h1>
        {trackList(album.tracks)}
        <hr></hr>
      </div>
    )
  })
  }

const trackList = (data) => {

  return data
  .sort((a, b) => (a.no > b.no) ? 1 : -1)
  .map((track) => {
    return (
      <div style={{ marginTop: "10px", justifyItems: "left", width: "250px"}} key={track.slug}>
        <span style={{alignSelf: "left"}} >
          <Link style={linkStyle} to={`/${track.slug}`}>
            {track.no} | {track.title}
          </Link>
        </span>
      </div>

    )
  })
}

// markup
function IndexPage() {
  return (
    <StaticQuery
      query={graphql`
      query {
        izbl {
        albums {
          id
          title
          yearOfRelease
          tracks {
            no
            originalTrack
            slug
            textAuthor
            title
            id
            audioTrack {
              fileName
              url
              mimeType
            }
          }
        }
      }
      }`}
      render={data => (
        <main style={pageStyles}>
          <title>Dolina Izabeli</title>
          <div style={mainContainer}>
            {albumsList(data.izbl.albums)}
          </div>
        </main>
      )} />
  )
}

export default IndexPage
