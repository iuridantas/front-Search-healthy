import { api } from '../../utils/api/apiProfile';
import { useContext, useEffect, useState } from 'react';
import { CardHome } from '../../components/card/cardHome';
import { Profiles } from '../../utils/types/requests';
import { Card, CircularProgress } from '@chakra-ui/react';

import SearchContext from '../../context/searchContext';
import { useDebounce } from 'usehooks-ts';
import { TopHome } from '../../components/top/topHome';

export function Home() {
  const [profiles, setProfiles] = useState<Profiles[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);
  const { search } = useContext(SearchContext);
  const debouncedSearch = useDebounce(search, 1000);
  const [filteredProfiles, setFilteredProfiles] = useState<Profiles[]>([]);

  async function getHomeInfo() {
    setLoading(true);
    const allProfiles = await api.getProfiles();
    setProfiles(allProfiles ?? []);
    setLoading(false);
  }

  function updatePage() {
    setControl(!control);
  }

  useEffect(() => {
    getHomeInfo();
  }, [control]);

  useEffect(() => {
    if (search !== '') {
      const getFilteredProfiles = profiles.filter((profile) =>
        profile.name.toUpperCase().includes(search.toUpperCase()),
      );
      setFilteredProfiles(getFilteredProfiles);
    } else {
      setFilteredProfiles([]);
    }
  }, [debouncedSearch]);

  const hasFilter = filteredProfiles.length === 0;

  return (
    <>
      <TopHome/>
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
          {hasFilter
            ? profiles.map((profiles) => {
                return (
                  <CardHome
                    profiles={profiles}
                    key={profiles.id}
                    updatePage={updatePage}
                  />
                );
              })
            : filteredProfiles.map((profiles) => {
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
