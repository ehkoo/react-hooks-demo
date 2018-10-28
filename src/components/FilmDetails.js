import React, { useState } from 'react'
import {
  minorScale,
  majorScale,
  Pill,
  Pane,
  Tab,
  Tablist,
  Heading,
  Paragraph,
  Text
} from 'evergreen-ui'

import FilmPeople from './FilmPeople'

const TABS = [
  { label: 'People', component: FilmPeople },
  { label: 'Locations', component: Paragraph },
  { label: 'Species', component: Paragraph }
]

export default function FilmDetails({ film }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (film == null)
    return <Paragraph>Pick a film from the button above</Paragraph>

  return (
    <Pane>
      <Heading
        is="h1"
        size={600}
        marginBottom={majorScale(2)}
        textTransform="uppercase"
        letterSpacing="2px"
        fontWeight={700}
        display="flex"
        alignItems="center"
      >
        {film.title}{' '}
        <Text marginLeft={minorScale(2)} letterSpacing="2px">
          ({film.release_date})
        </Text>
      </Heading>

      <Pane background="yellowTint" marginBottom={majorScale(2)}>
        <Paragraph padding={majorScale(2)} size={500}>
          {film.description}
        </Paragraph>
      </Pane>

      <Paragraph size={500}>
        <Text fontWeight={700}>Producer:</Text> {film.producer}
      </Paragraph>

      <Paragraph size={500}>
        <Text fontWeight={700}>Director:</Text> {film.director}
      </Paragraph>
      <Paragraph size={500}>
        <Text fontWeight={700}>Rating:</Text>{' '}
        <Pill display="inline-flex" margin={8} color="green" isSolid>
          {film.rt_score}
        </Pill>
      </Paragraph>

      <Pane height={120} marginTop={majorScale(2)}>
        <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
          {TABS.map(({ label }, index) => (
            <Tab
              key={label}
              id={label}
              onSelect={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              aria-controls={`panel-${label}`}
            >
              {label}
            </Tab>
          ))}
        </Tablist>
        <Pane padding={16} flex="1">
          {TABS.map((tab, index) => (
            <Pane
              key={tab.label}
              id={`panel-${tab.label}`}
              role="tabpanel"
              aria-labelledby={tab.label}
              aria-hidden={index !== selectedIndex}
              display={index === selectedIndex ? 'block' : 'none'}
            >
              <tab.component film={film}>{tab.label}</tab.component>
            </Pane>
          ))}
        </Pane>
      </Pane>
    </Pane>
  )
}
