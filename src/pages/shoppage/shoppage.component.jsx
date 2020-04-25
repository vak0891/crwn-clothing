import React from "react";
import "./shoppage.styles.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";  



import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


  componentDidMount(){
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');

    // // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-7409f/databases/(default)/documents/collections')
    // // .then(response => response.json())

    // collectionRef.get().then(
    //     snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         updateCollections(collectionsMap);
    //         this.setState({loading: false});
    //     }


    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     this.setState({loading: false});
    // });
  }

  render() {
    const { match } = this.props;
    //const { loading } = this.state;
    return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
            </div>  
    );
}
};


const mapDispatchToProps =  dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
