import { api } from '../../utils/api/apiTraining';
import { useContext, useEffect, useState } from 'react';
import { Trainings } from '../../utils/types/requests';
import { Card, CircularProgress } from '@chakra-ui/react';
import SearchContext from '../../context/searchContext';
import { useDebounce } from 'usehooks-ts';
import { CardTraining } from '../../components/card/cardTraining';
import { TopHome } from '../../components/top/topHome';


export function Training() {
  const [trainings, setTrainings] = useState<Trainings[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);
  const { search } = useContext(SearchContext);
  const debouncedSearch = useDebounce(search, 1000);
  const [filteredTrainings, setFilteredTrainings] = useState<Trainings[]>([]);

  async function getTeamsInfo() {
    setLoading(true);
    const allTrainings = await api.getTrainings();
    setTrainings(allTrainings ?? []);
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
      const getFilteredTrainings = trainings.filter((training) =>
      training.muscularegroup.toUpperCase().includes(search.toUpperCase()),
      );
      setFilteredTrainings(getFilteredTrainings);
    } else {
      setFilteredTrainings([]);
    }
  }, [debouncedSearch]);

  const hasFilter = filteredTrainings.length === 0;

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
          paddingTop="5%"
        >
          {hasFilter
            ? trainings.map((trainings) => {
                return (
                  <CardTraining
                  trainings={trainings}
                    key={trainings.id}
                  />
                );
              })
            : filteredTrainings.map((trainings) => {
                return (
                  <CardTraining
                  trainings={trainings}
                    key={trainings.id}
                  />
                );
              })}
        </Card>
      )}
    </>
  );
}