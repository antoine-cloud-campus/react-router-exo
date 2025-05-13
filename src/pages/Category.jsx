import { useParams } from 'react-router'
import { useNavigate } from 'react-router';

const Category = () => {

    const  navigate  = useNavigate();
    const { category } = useParams();

    const handleNavigateHome = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>Catégorie : {category}</h1>
            <button onClick={handleNavigateHome}>Retour à la page d'accueil</button>
        </div>
    )
}

export default Category
