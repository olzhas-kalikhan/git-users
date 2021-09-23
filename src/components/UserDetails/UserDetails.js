import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box, Avatar, Typography, Grid, Link } from "@mui/material";
import GithubIcon from "assets/icons/GitHubIcon.png";

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [err, setErr] = useState(false);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => {
        setErr(true);
      });
  }, [username]);
  if (err) {
    return <Typography color="error">Oops error occured... </Typography>;
  }
  if (user) {
    const {
      name,
      avatar_url,
      login,
      html_url,
      public_repos,
      followers,
      following,
    } = user;
    return (
      <Grid container>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar src={avatar_url} sx={{ width: 300, height: 300 }} />
            <Typography variant="h4">{name}</Typography>
            <Typography variant="h6">{login}</Typography>
            <Typography
              variant="h5"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Avatar src={GithubIcon} sx={{ height: 28, width: 28 }} />
              <Link href={html_url}>Github</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h5">
            Public Repos:<b> {public_repos}</b>
          </Typography>
          <Typography variant="h5">
            Follower: <b> {followers}</b>
          </Typography>
          <Typography variant="h5">
            Following:<b> {following}</b>
          </Typography>
        </Grid>
      </Grid>
    );
  } else {
    return <Typography color="error">Users Not Found </Typography>;
  }
};
export default UserDetails;
