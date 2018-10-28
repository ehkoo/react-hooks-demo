import React, { useEffect, useState } from 'react'
import { Heading, Pane, majorScale } from 'evergreen-ui'

import FilmSelector from './components/FilmSelector'
import FilmDetails from './components/FilmDetails'

import fetchFilms from './effects/fetchFilms'

import keyBy from 'lodash/keyBy'

export default function App(props) {
  const [films, setFilms] = useState(null)

  useEffect(() => {
    if (films == null) {
      fetchFilms()
        .then(({ data }) => setFilms(keyBy(data, d => d.id)))
        .catch(console.error)
    }
  })

  return (
    <Pane>
      <Pane
        is="header"
        elevation={1}
        paddingLeft={majorScale(2)}
        paddingRight={majorScale(2)}
        height={72}
        display="flex"
        alignItems="center"
      >
        <Heading size={500} letterSpacing="2px" fontWeight={700}>
          Studio Ghibli Movies
        </Heading>
        <Pane marginLeft={majorScale(3)}>
          <FilmSelector films={films != null ? Object.values(films) : null} />
        </Pane>
      </Pane>

      <Pane
        is="main"
        paddingLeft={majorScale(2)}
        paddingRight={majorScale(2)}
        marginTop={majorScale(3)}
      >
        <FilmDetails />
      </Pane>
    </Pane>
  )
}
