import React from "react";
import "./shoppage.styles.scss";
import shopdata from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class ShopPage extends React.Component{
    constructor(){
        super()
        this.state = {
            collections: shopdata
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.collections.map(({ id, ...otherCollectionItems}) => {
                        return <PreviewCollection key={id} {...otherCollectionItems}/>
                    })
                }
            </div>
        );
    }
}

export default ShopPage;
