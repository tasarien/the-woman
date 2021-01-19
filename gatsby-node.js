const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const playerPage = path.resolve(`./src/templates/player.js`)
  const playerQuery = await graphql(`
  {
    izbl {
      tracks {
        album {
          id
          title
          yearOfRelease
          picture {
            fileName
            url
          }
        }
        audioTrack {
          fileName
          url
        }
        slug
        textAuthor
        title
      }
    }
    }
  `)

  playerQuery.data.izbl.tracks.forEach(( track ) => {
      console.log(track.node)
    createPage({
      path: track.slug,
      component: playerPage,
      context: {
        data: track,
      },
    })
  })
}