import React from 'react';

import './collection.styles.scss';


const CollectionPage = ({ match }) => {
    console.log(match.params.collectionId); 
    return(
        <div className="collection-page">
            <h1>titolo pagina categoria</h1>
        </div>
    )
}

export default CollectionPage;