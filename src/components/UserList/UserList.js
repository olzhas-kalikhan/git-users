import { Autocomplete, Grid, TextField, Box } from "@mui/material";
import User from "components/User";
import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [err, setError] = useState(false);
  const handleSearchChange = (event) => {
    setSearchTerm(event?.target.value);
  };

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch(() => setError(true));
  }, []);
  return (
    <Box>
      <TextField
        placeholder="Username"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Grid container alignItems="center">
        {users
          .filter((user) => user.login.startsWith(searchTerm))
          .map((user) => (
            <Grid item xs={12} md={6}>
              <User user={user} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
export default UserList;
