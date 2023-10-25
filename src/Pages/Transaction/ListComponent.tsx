import {
  Avatar,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

export const ListComponent = ({ primary, secondary }: any) => {
  return (
    <div>
      <List sx={{  bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar  >
           
          </ListItemAvatar>
          <ListItemText
            primary={primary}
            secondary={secondary}
            sx={{
              "& .MuiTypography-root": {
                fontSize: "12px", // Adjust the font size as needed
                ml: 1
              }
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};
