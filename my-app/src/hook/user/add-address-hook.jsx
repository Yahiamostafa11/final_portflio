import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAddress } from '../../redux/actions/userAddressesAction';
import notify from '../Alter';
import { useNavigate } from 'react-router-dom';

const AddAddressHook = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [alias, setAlias] = useState('')
    const [details, setDetails] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeAlias = (event) => {
        event.persist();
        setAlias(event.target.value)
    }

    const onChangeDetails = (event) => {
        event.persist();
        setDetails(event.target.value)
    }

    const onChangePhone = (event) => {
        event.persist();
        setPhone(event.target.value)
    }

    const onSubmit = async () => {
        if (alias === "" || details === "" || phone === "") {
            notify("Please complete the data", "warn")
            return
        }
        setLoading(true)
        await dispatch(addUserAddress({
            alias: alias,
            details: details,
            phone: phone,
            city: '',
            postalCode: ""
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.userAddressesReducer.addUserAddress)

    useEffect(() => {
        if (loading === false) {
            if (res && res.status === 200) {
                notify("Address added successfully", "success")
                setTimeout(() => {
                    navigate('/user/addresses')
                }, 1000);
            } else {
                notify("There was a problem with the addition process", "error")
            }
        }
    }, [loading])

    return [alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone, onSubmit]
}

export default AddAddressHook
