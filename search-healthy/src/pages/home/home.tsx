import { api } from '../../utils/api/apiProfile';
import { CardListDiv, Load } from './style';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardHome } from '../../components/card/card';
import { Profiles } from '../../utils/types/requests';


export function Home() {
  const [profiles, setProfiles] = useState<Profiles[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);
  const { _id } = useParams();

  async function getTeamsInfo() {
    setLoading(true);
    const allProfiles = await api.getProfiles();
    setProfiles(allProfiles?? []);
    setLoading(false);
  }

  function updatePage() {
    setControl(!control);
  }

  useEffect(() => {
    getTeamsInfo();
  }, [control]);

  return (
    <>
      {loading ? (
        <Load>
          {' '}
          <h1>loading...</h1>
        </Load>
      ) : (
        <CardListDiv>
          {profiles.map((profiles) => {
            return (
              <CardHome
                key={profiles._id}
                _id={profiles._id}
                name={profiles.name}
                image={profiles.image}
                gym={profiles.gym}
                tall={profiles.tall}
                weigth={profiles.weigth}
                objective={profiles.objective}
                services={profiles.services}
                updatePage={updatePage}
              />
            );
          })}
        </CardListDiv>
      )}
    </>
  );
}