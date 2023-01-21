import { api } from '../../utils/api/apiProfile';
import { useEffect, useState } from 'react';
import { Profiles } from '../../utils/types/requests';
import { Card, Button} from '@chakra-ui/react';
import { CardProfile } from '../../components/card/cardProfile';

export function Profile() {
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
        <Button
        isLoading
        colorScheme='red'
      >
        Click me
      </Button>
      ) : (
        <Card
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          direction="row"
          paddingBottom='10%'
          paddingTop='10%'
        >
          {profiles.map((profiles) => {
            return (
              <CardProfile
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