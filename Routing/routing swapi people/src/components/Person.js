import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Person = () => {
  const { personId } = useParams();
  const [person, setPerson] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${personId}`)
      .then(res => res.json())
      .then(res => setPerson(res))
      .catch(() => navigate('/not-found'));
  }, [navigate, personId]);

  const nextPersonHandler = () => {
    navigate(`/people/${+personId + 1}`);
  };

  return (
    <>
      <h2>{person.name}</h2>
      <button onClick={nextPersonHandler}>Next</button>

      <ul>
        {person.films?.map((f, i) =>
          <li key={i} >
            <Link to={`films/${f.split('/')[5]}`}>{f}</Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Person;