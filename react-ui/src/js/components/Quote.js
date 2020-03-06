// import dependencies
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

// import styles
import '../../style/sass/modules/_quote.scss'

export const Quote = ({ content }) => {
  return (
    <article className='quote flex row'>
      <figure className='item_1_5 flex col afe'>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </figure>
      <blockquote className='item_4_5'>{content}</blockquote>
    </article>
  )
}
