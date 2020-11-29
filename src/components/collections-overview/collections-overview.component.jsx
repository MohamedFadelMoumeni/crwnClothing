import React from 'react';
import './collection-overview.styles.scss';
import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectObj } from '../../redux/shop_data/shop_data.selectors';
import { connect } from 'react-redux';

const CollectionsOverview = ({ collections }) => {

    return (
        <div className="collections-overview">
            {
                collections.map(collection => (
                    <PreviewCollection key={collection.id} collection={collection} />
                ))
            }
        </div>
    )
}
const mapStateToProps = state => ({
    collections: selectObj(state)
});

export default connect(mapStateToProps)(CollectionsOverview);