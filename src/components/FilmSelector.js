import React, { useState } from 'react'
import { SelectMenu, Button } from 'evergreen-ui'

export default function FilmSelector(props) {
  const [selected, setSelected] = useState(null)
  const films = props.films || []

  return (
    <SelectMenu
      title="Select name"
      options={films.map(film => ({ label: film.title, value: film.id }))}
      selected={selected}
      onSelect={item => {
        setSelected(item.label)
        props.onSelect && props.onSelect(item)
      }}
    >
      <Button>{selected != null ? selected : 'Pick a film...'}</Button>
    </SelectMenu>
  )
}
