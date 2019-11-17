import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";

const PreviewCollection = ({title, routeName, items}) => {
    return(
        <div className="collection-preview">
            <Link to={`/${routeName}`}>
                <h1 className="title">{title.toUpperCase()}
                </h1>
            </Link>
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