import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop_data/shop_data.selectors';
import { connect } from 'react-redux';
import { CollectionPageContainer, TextContainer, ItemsContainer } from './collection.styles';
import './collection.styles.scss';

const CollectionPage = ({ match, collection }) => {

    const { title } = collection

    return (
        <CollectionPageContainer>
            <TextContainer>{title}</TextContainer>
            <ItemsContainer>
                {
                    collection.items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }

            </ItemsContainer>
        </CollectionPageContainer>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);