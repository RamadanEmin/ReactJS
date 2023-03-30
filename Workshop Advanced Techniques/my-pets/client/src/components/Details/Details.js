import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import * as likeService from '../../services/likeService';
import { useAuthContext } from '../../contexts/AuthContext';
import usePetState from '../../hooks/usePetState';

import { Button } from 'react-bootstrap';

const Details = () => {
    const { user } = useAuthContext();
    const { petId } = useParams();
    const [pet, setPet] = usePetState(petId);

    useEffect(() => {
        likeService.getPetLikes(petId)
            .then(likes => {
                setPet(state => ({...state, likes}))
            })
    }, []);

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
            <a className="button" href="#" >Delete</a>
        </>
    );

    const likeButtonClick = () => {
        if (user._id === pet._ownerId) {
            return;
        }

        if (pet.likes.includes(user._id)) {
            addNotification('You cannot like again')
            return;
        }

        likeService.like(user._id, petId)
            .then(() => {
                setPet(state => ({...state, likes: [...state.likes, user._id]}));

                addNotification('Successfuly liked a cat :)', types.success);
            });
    };

    const userButtons = <Button onClick={likeButtonClick} disabled={pet.likes?.includes(user._id)}>Like</Button>;

    return (
        <>
            <section id="details-page" className="details">
                <div className="pet-information">
                    <h3>Name: {pet.name}</h3>
                    <p className="type">Type: {pet.type}</p>
                    <p className="img"><img src={pet.imageUrl} /></p>
                    <div className="actions">
                        {user._id && (user._id == pet._ownerId
                            ? ownerButtons
                            : userButtons
                        )}

                        <div className="likes">
                            <img className="hearts" src="/images/heart.png" />
                            <span id="total-likes">Likes: {pet.likes?.length || 0}</span>
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