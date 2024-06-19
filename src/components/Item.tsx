import React from "react";
import { ItemCard } from "./ItemCard";

interface ItemCardProps {
  item: ItemCard
}

export const Item = ({item}: ItemCardProps) => {

  if (item.title && item.title.length > 50) {
    item.title = item.title.slice(0, 51) + '...';
  }
  
  let cost;

  if (item.currency_code == "USD") {
    cost = "$" + item.price;
  } else if (item.currency_code == "EUR") {
    cost = "€" + item.price;
  } else {
    cost = item.price + ' ' + item.currency_code;
  }

  let quantityColor;

  if (item.quantity && item.quantity <= 10) {
    quantityColor = 'level-low';
  } else if (item.quantity && item.quantity <= 20) {
    quantityColor = 'level-medium';
  } else {
    quantityColor = 'level-high'
  }

  return (
    <div className="item">
      <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage?.url_570xN} />
          </a>
      </div>
      <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{cost}</p>
            <p className={`item-quantity ${quantityColor}`}>{item.quantity}</p>
      </div>
    </div>
  )
}

