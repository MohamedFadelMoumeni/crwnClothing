import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router-dom';

import './preview-collection.style.scss';

const PreviewCollection = ({ collection, history, match }) => {

    const { title, items, routeName } = collection;


    return (

        <div className="preview-collection">
            <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
                {/* get called everytime we re-render the component  */}
            </div>
        </div>
    )

}

export default withRouter(PreviewCollection);