import { api } from '../../utils/api/apiProfile';
import { useEffect, useState } from 'react';
import { CardHome } from '../../components/card/cardHome';
import { Profiles } from '../../utils/types/requests';
import { Card, CircularProgress } from '@chakra-ui/react';

export function Home() {
  const [profiles, setProfiles] = useState<Profiles[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);

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
        <CircularProgress
          isIndeterminate
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="20%"
        />
      ) : (
        <Card
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          direction="row"
          paddingBottom="10%"
          paddingTop="10%"
        >
          {profiles.map((profiles) => {
            return (
              <CardHome
                profiles={profiles}
                key={profiles.id}
                updatePage={updatePage}
              />
            );
          })}
        </Card>
      )}
    </>
  );
}
