import { api } from '../../utils/api/apiProfile';
import { useContext, useEffect, useState } from 'react';
import { Profiles } from '../../utils/types/requests';
import { Card, CircularProgress } from '@chakra-ui/react';
import { CardProfile } from '../../components/card/cardProfile';
import { Top } from '../../components/top/top';
import SearchContext from '../../context/searchContext';
import { useDebounce } from 'usehooks-ts';

export function Profile() {
  const [profiles, setProfiles] = useState<Profiles[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);
  const { search } = useContext(SearchContext);
  const debouncedSearch = useDebounce(search, 1000);
  const [filteredProfiles, setFilteredProfiles] = useState<Profiles[]>([]);

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

  useEffect(() => {
    if (search !== '') {
      const getFilteredProfiles = profiles.filter((profile) =>
        profile.name.toUpperCase().includes(search.toUpperCase()),
      );
      setFilteredProfiles(getFilteredProfiles);
    } else {
      setFilteredProfiles([])
    }
  }, [debouncedSearch]);

  const hasFilter = filteredProfiles.length === 0;

  return (
    <>
      <Top />
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
          paddingTop="5%"
        >
          {hasFilter
            ? profiles.map((profiles) => {
                return (
                  <CardProfile
                    profiles={profiles}
                    key={profiles.id}
                    updatePage={updatePage}
                  />
                );
              })
            : filteredProfiles.map((profiles) => {
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
