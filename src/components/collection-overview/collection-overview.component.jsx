import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectShopItems} from '../../redux/shop/shop.selector';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherCollectionProps}) => {
            return <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
        })}
    </div>
)

const mapStateToProps = state => ({
    collections: selectShopItems(state)
})

export default connect(mapStateToProps)(CollectionOverview);