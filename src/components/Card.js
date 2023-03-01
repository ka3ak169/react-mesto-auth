import React from "react"

export default function Card({name, src, likes, handleClick}) {
  return(
      <div className="card__element">
        <img className="card__image" alt={name} src={src} onClick={() => handleClick({src, name})} />
        <div className="card__group">
          <h2 className="card__place">{name}</h2>
          <div className="card__like-box">
            <button className="card__like" type="button"></button>
            <p className="card__like-counter">{likes}</p>
          </div>
        </div>
        <button className="card__trash" type="button"></button>
      </div>
  )
}