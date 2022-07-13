import { GIfItem } from './GIfItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const { images , isLoading } = useFetchGifs( category );

    console.log(isLoading)
    
    return (
        <>
            <h3 className='animate__animated animate__shakeY'>{category}</h3>

            { isLoading && <p className='animate__animated animate__bounceIn'>Loading ...</p> }

            { <div className='card-grid'>
                    {
                        images.map( img => (
                            <GIfItem 
                                key={img.id}
                                {...img} />
                        ))
                    }
            </div> }
        </>
    )
}
