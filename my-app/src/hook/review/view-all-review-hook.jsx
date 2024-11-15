import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allReviewProduct } from './../../redux/actions/reviewAction';

const ViewAllReviewHook = (id) => {
    const dispatch = useDispatch();

    const allReview = useSelector((state) => state.reviewReducer.allReviewProduct)

    useEffect(() => {
        dispatch(allReviewProduct(id, 1, 5))
    }, [dispatch, id])

    const onPress = (page) => {
        dispatch(allReviewProduct(id, page, 5))
    }

    return [allReview, onPress]
}

export default ViewAllReviewHook