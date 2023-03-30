import { useParams, useNavigate, Link } from 'react-router-dom';

import usePetState from '../../hooks/usePetState';

const Details = () => {
    const { petId } = useParams();
    const [pet, setPet] = usePetState(petId);
   
    return (
        <>
            <section id="details-page" className="details">
                <div className="pet-information">
                    <h3>Name: {pet.name}</h3>
                    <p className="type">Type: {pet.type}</p>
                    <p className="img"><img src={pet.imageUrl} /></p>
                    <div className="actions">
                        <div className="likes">
                            <img className="hearts" src="/images/heart.png" />
                            <span id="total-likes">Likes:  0</span>
                        </div>
                    </div>
                </div>
                <div className="pet-description">
                    <h3>Description:</h3>
                    <p>{pet.description}</p>
                </div>
            </section>
        </>
    );
}

export default Details;