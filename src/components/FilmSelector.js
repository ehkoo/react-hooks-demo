import React from 'react'
import { IconButton, Popover, Position, Menu } from 'evergreen-ui'

export default function FilmSelector(props) {
  const films = props.films || []

  return (
    <Popover
      position={Position.BOTTOM_LEFT}
      content={
        <Menu>
          <Menu.Group>
            {films.map(film => (
              <Menu.Item
                key={film.id}
                onSelect={() => props.onSelect && props.onSelect(film.id)}
              >
                {film.title}
              </Menu.Item>
            ))}
          </Menu.Group>
        </Menu>
      }
    >
      <IconButton appearance="minimal" icon="mobile-video" iconSize={18} />
    </Popover>
  )
}
