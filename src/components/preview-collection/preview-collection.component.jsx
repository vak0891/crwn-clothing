import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({title,route, items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                    .filter(el => el.id < 5)
                    .map((item) => {
                        return(
                            <CollectionItem key={item.id} {...item}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default PreviewCollection;
