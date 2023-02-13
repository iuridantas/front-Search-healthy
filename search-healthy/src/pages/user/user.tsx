import { api } from '../../utils/api/apiUser';
import { useEffect, useState } from 'react';
import { User } from '../../utils/types/requests';
import { Card, CircularProgress } from '@chakra-ui/react';
import { CardUser } from '../../components/card/cardUser';

export function User() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);

  async function getUsersInfo() {
    setLoading(true);
    const allUsers = await api.getUsers();
    setUsers(allUsers ?? []);
    setLoading(false);
  }

  function updatePage() {
    setControl(!control);
  }

  useEffect(() => {
    getUsersInfo();
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
          h='92.8vh'
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          direction="row"
          paddingBottom="10%"
          paddingTop="5%"
        >
          {users.map((users) => {
            return (
              <CardUser users={users} key={users.id} updatePage={updatePage} />
            );
          })}
        </Card>
      )}
    </>
  );
}
