import React from 'react';

import { setCartItems } from '../../redux/cartItems/cartItems.action';
import { CollectionItemContainer, AddButton, ImageDiv, CollectionFooter, NameSpan, PriceSpan } from './collection-item.styles';
import { connect } from 'react-redux';
const CollectionItem = ({ item, setCartItems }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <ImageDiv imageUrl={imageUrl} />
            <CollectionFooter>
                <NameSpan>{name}</NameSpan>
                <PriceSpan>{price}</PriceSpan>
            </CollectionFooter>
            <AddButton type="button" inverted onClick={() => setCartItems(item)}>Add to cart</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    setCartItems: (item) => dispatch(setCartItems(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
