import { api } from '../../utils/api/apiProfile';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardHome } from '../../components/card/card';
import { Profiles } from '../../utils/types/requests';
import { Card, Text } from '@chakra-ui/react';

export function Home() {
  const [profiles, setProfiles] = useState<Profiles[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);
  const { _id } = useParams();

  async function getTeamsInfo() {
    setLoading(true);
    const allProfiles = await api.getProfiles();
    setProfiles(allProfiles ?? []);
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
        <Text fontSize="2rem" color="black">
          {' '}
          <h1>loading...</h1>
        </Text>
      ) : (
        <Card
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          direction="row"
          paddingTop="10vh"
          paddingBottom="10vh"
        >
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
        </Card>
      )}
    </>
  );
}
