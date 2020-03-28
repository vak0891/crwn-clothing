import "./collections-overview.styles.scss"
import React from "react";
import PreviewCollection from "../preview-collection/preview-collection.component";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({collections}) => {
    return(
        <div className="collections-overview">
                {
                    collections.map(({ id, ...otherCollectionItems}) => {
                        return <PreviewCollection key={id} {...otherCollectionItems}/>
                    })
                }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);