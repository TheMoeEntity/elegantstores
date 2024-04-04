'use server'
import probe from 'probe-image-size';
import { ISBProducts } from '../types';
export const formatProductWithDimensions = async (product:ISBProducts) => {
    let result = await probe(product.images[0])
    return {
        ...product,
        dimensions:{
            width:result.width,
            height:result.height
        }
    }
}