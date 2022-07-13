import React, { useState } from "react"
import { AddCategory, GifGrid } from "./components"

const GifExpertApp = () => {

    const categoriesList = ["Homer Simpson"]
    const [categories, setCategories] = useState(categoriesList)

    const onAddCategory = ( newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return(
        <>
            <h2>GifExpertApp</h2>

            <AddCategory
                //setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />
            {
                categories.map( (cat) => (
                    <GifGrid 
                        key={ cat }
                        category={ cat }/>
                ))
            }
        </>
    )
}

export default GifExpertApp