
import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const collectionRef = categoryId
            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)

            })
            .catch(error => {
                console.log(error);
            })
    }, [categoryId])



    return (
        <div >
            <h1>{greeting}</h1>
            <div className="containerProducts">
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer
