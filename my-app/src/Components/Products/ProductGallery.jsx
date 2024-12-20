import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import { useParams } from 'react-router-dom';
import ViewProductsDetailsHook from './../../hook/products/view-products-details-hook';
const ProductGallery = () => {
    const { id } = useParams();
    const [ , images ] = ViewProductsDetailsHook(id );

    
    return (
        <div className="product-gallery-card d-flex justify-content-center align-items-center
        pt-2">
            <ImageGallery items={images}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery
