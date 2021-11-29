import React from 'react'
import './Main.css'
import { animals } from '../../data'
import { Animal } from '../Animal/Animal'
import background from '../../background.png'

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal
          key={animal.id}
          name={animal.name}
          type={animal.type}
          says={animal.says}
          left={animal.left}
          top={animal.top}
        />
      ))}
    </main>
  )
}

// name: 'Betsy the Cow',
//     type: 'cow',
//     says: 'Mooooooo!',
//     top: '200px',
//     left: '50%',
