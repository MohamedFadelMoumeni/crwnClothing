import React, {useEffect}  from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionStart } from '../../redux/shop_data/shop_data.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop_data/shop_data.selectors';
import CollectionsOverview from '../../components/collections-overview/collection-overview.container';
import { connect } from 'react-redux';
import './shop.style.scss';



const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

const ShopPage = ({ fetchCollectionStart, match, isCollectionsLoaded, isFetching }) => {
    useEffect(() => {

        fetchCollectionStart();
    }, [fetchCollectionStart])


    return (<div className="shop-page">

        <Switch>
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching}  {...props} />} />
            <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
        </Switch>

    </div>)
}

const mapStateToProps = state => ({
    isFetching: selectIsCollectionFetching(state),
    isCollectionsLoaded: selectIsCollectionsLoaded(state)
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())

})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
