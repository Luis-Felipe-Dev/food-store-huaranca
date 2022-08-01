import React from "react";
import Item from "./Item";

const ItemList = ({ listPlates }) => {
    return (
        <div className="row">
            {listPlates.map((plates) => <Item key={plates.id} plates={plates} />)}
        </div>
    )
}

export default ItemList;