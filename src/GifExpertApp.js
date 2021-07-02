import React, {useState, Fragment} from 'react';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories( cats => [...cats, 'HunterXHunter'] );
    // };

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid key={category} category={ category } />
                    })
                }
            </ol>

        </Fragment>
    )
}
