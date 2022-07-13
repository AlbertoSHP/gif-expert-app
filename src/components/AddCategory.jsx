import React, { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        /* if (inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats])
            setInputValue("")
        } */

        if (inputValue.trim().length <= 1) return

        setInputValue('')
        onNewCategory( inputValue.trim())
    }

    /* AddCategory.propTypes = {
        setCategories: PropTypes.func.isRequired
    } */

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}