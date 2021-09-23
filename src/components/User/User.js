import { Box, Avatar, Typography, ButtonBase, Link } from "@mui/material";
import { useHistory } from "react-router";

const User = ({ user }) => {
  const { login, avatar_url, html_url } = user;
  const history = useHistory();
  const handleButtonClick = () => {
    history.push(`/${login}`);
  };
  return (
    <Box sx={{ display: "flex", mt: 2 }}>
      <ButtonBase onClick={handleButtonClick}>
        <Avatar
          alt={`${login}-pic`}
          src={avatar_url}
          sx={{ width: 50, height: 50, mr: 2 }}
        />
        <Typography variant="h4">{login}</Typography>
      </ButtonBase>
    </Box>
  );
};
export default User;
