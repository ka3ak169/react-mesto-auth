import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import { useContext } from "react";

export default function Card({card, name, src, likes, owner, onCardClick, onCardLike}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = (owner === currentUser._id);
  const isLiked = likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `card__like ${isLiked && 'card__like_active'}` 
  );
  
  function handleLikeClick() {
    onCardLike(card)
  }

  function handleClick() {
    onCardClick(src, name)
  }

  return(
      <div className="card__element">
        <img className="card__image" alt={name} src={src} onClick={handleClick} />
        <div className="card__group">
          <h2 className="card__place">{name}</h2>
          <div className="card__like-box">
            <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
            <p className="card__like-counter">{likes.length}</p>
          </div>
        </div>
        {isOwn && <button className="card__trash" type="button"></button>}
      </div>
  )
}