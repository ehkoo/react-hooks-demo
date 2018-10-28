import React, { useState, useEffect } from 'react'
import {
  Pane,
  Card,
  UnorderedList,
  ListItem,
  Text,
  Spinner,
  majorScale
} from 'evergreen-ui'
import fetchPeople from '../effects/fetchPeople'

export default function FilmPeople({ film }) {
  const [people, setPeople] = useState(null)

  useEffect(
    () => {
      fetchPeople(film.people)
        .then(res => {
          const data = res.reduce(
            (acc, { data }) => [
              ...acc,
              ...(Array.isArray(data) ? data : [data])
            ],
            []
          )

          setPeople(data)
        })
        .catch(console.error)
    },
    [film.id]
  )

  if (people == null)
    return (
      <Pane
        height={120}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Spinner />
      </Pane>
    )

  return (
    <React.Fragment>
      {people.map(p => (
        <Card
          key={p.id}
          background="tint2"
          marginBottom={majorScale(2)}
          padding={majorScale(1)}
        >
          <UnorderedList>
            <ListItem icon="person">
              <Text fontWeight={700}>Name:</Text> {p.name}
            </ListItem>
            <ListItem icon="heart">
              <Text fontWeight={700}>Gender:</Text> {p.gender}
            </ListItem>
            <ListItem icon="predictive-analysis">
              <Text fontWeight={700}>Age:</Text> {p.age}
            </ListItem>
            <ListItem icon="tint">
              <Text fontWeight={700}>Hair color:</Text> {p.hair_color}
            </ListItem>
            <ListItem icon="tint">
              <Text fontWeight={700}>Eye color:</Text> {p.eye_color}
            </ListItem>
          </UnorderedList>
        </Card>
      ))}
    </React.Fragment>
  )
}
