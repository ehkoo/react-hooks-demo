import React, { useState } from 'react'
import { majorScale, Pane, Tab, Tablist, Heading } from 'evergreen-ui'

const TABS = ['General', 'Locations', 'People', 'Species']

export default function FilmDetails(props) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <Pane>
      <Heading
        is="h1"
        size={600}
        marginBottom={majorScale(2)}
        textTransform="uppercase"
        letterSpacing="2px"
        fontWeight={700}
      >
        Castle In The Sky
      </Heading>

      <Pane height={120}>
        <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
          {TABS.map((tab, index) => (
            <Tab
              key={tab}
              id={tab}
              onSelect={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              aria-controls={`panel-${tab}`}
            >
              {tab}
            </Tab>
          ))}
        </Tablist>
        <Pane padding={16} background="tint1" flex="1">
          {TABS.map((tab, index) => (
            <Pane
              key={tab}
              id={`panel-${tab}`}
              role="tabpanel"
              aria-labelledby={tab}
              aria-hidden={index !== selectedIndex}
              display={index === selectedIndex ? 'block' : 'none'}
            >
              {tab}
            </Pane>
          ))}
        </Pane>
      </Pane>
    </Pane>
  )
}
