import * as React from "react"
import YearCounter from '../components/year_counter'
import TrackBrowser from '../components/track_browser'
import Player from '../components/player'
import { Link } from 'gatsby'


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
  color: "Red",
  backgroundColor: "#B6CEDE",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifySelf: "center",
  borderRadius: "36px",
  background: "#18344C",
  boxShadow: "11px 11px 22px #142c41, -11px -11px 22px #1c3c57",
}

// markup
const PlayerPage = ({pageContext: { data }}) => {
  return (
        <main style={pageStyles}>
          <title>Dolina Izabeli</title>
          <div style={mainContainer}>
            <YearCounter />
            <Player track={data}/>
            <Link to='/'><TrackBrowser /></Link>
          </div>
        </main>
      )
    }

export default PlayerPage
