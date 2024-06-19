import React from "react";
import "../App.css";
import { Item } from "./Item";
import { ItemCard } from "./ItemCard";

type TItemsProps = {
  items: ItemCard[];
}

export const Listing = ({items}: TItemsProps) => {
  
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.listing_id} item={item}/>
      ))}
    </div>
  )
}
