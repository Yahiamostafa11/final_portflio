import React, { useEffect, useState } from 'react';
import { createSubCategory } from '../../redux/actions/subcategoryAction'
import { useSelector, useDispatch } from 'react-redux'
import notify from '../Alter'
import { getAllCategory } from '../../redux/actions/categoryAction'

const addSubcategoryHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        if (!navigator.onLine) {
            notify("There is a problem with the internet connection", "warn")
            return;
        }
        dispatch(getAllCategory());
    }, [])
    const [id, setID] = useState('0')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    //get last category state from redux
    const category = useSelector(state => state.allCategory.category)


    //get last subcategory state from redux
    const subcategory = useSelector(state => state.subCategory.subcategory)

    //on change dropdown menu
    const handleChange = (e) => {
        console.log(e.target.value)
        setID(e.target.value)
    }

    //to save name
    const onChangeName = (e) => {
        e.persist();
        setName(e.target.value)
    }
    //on save data 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            notify("There is a problem with the internet connection", "warn")
            return;
        }
        if (id === "0") {
            notify("Please select a main category", "warn")
            return;
        }
        if (name === "") {
            notify("Please enter the category name", "warn")
            return;
        }

        setLoading(true)
        await dispatch(createSubCategory({
            name,
            category: id
        }))
        setLoading(false)

    }
    useEffect(() => {

        if (loading === false) {
            setName("")
            setID("0")
            if (subcategory)
                console.log(subcategory)
            if (subcategory.status === 201) {
                notify("Added successfully", "success")
            }
            else if (subcategory === "Error Error: Request failed with status code 400") {
                notify("This name is duplicated, please choose another name", "warn")
            }
            else {
                notify("There is a problem with the addition process", "warn")
            }

            setLoading(true)
        }
    }, [loading])


    return [id, name, loading, category, subcategory, handleChange, handleSubmit, onChangeName]
};

export default addSubcategoryHook;