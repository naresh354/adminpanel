import { Box, InputBase, ListItemText, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SetUpHeader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <ListItemText
      
        primary={
          <Typography variant="h6" sx={primaryStyle}>
            Setup
          </Typography>
        }
        secondary={
          <Typography
            variant="body2"
            sx={{ color: "#64748B", fontSize: "11px" }}
          >
            Get you basic setups here
          </Typography>
        }
      />
      <Paper component="form" sx={customStyles.paperStyle}>
        <SearchIcon style={customStyles.searchIcon} />
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            '&::placeholder': {
              fontSize: '0.7rem',  // Adjust the font size as needed
            },
          }}
          placeholder="Search"
          // onChange={(e: any) => handleInputChange(e)}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        />
      </Paper>
    </Box>
  );
};
const primaryStyle = {
  fontSize: "14px",
  fontWeight: 600,
  color: "rgba(16, 24, 40, 1)",
};
const customStyles = {
  searchIcon: { fontSize: "20px", color: "#c4c4c4", marginRight: "8px" },
  paperStyle: {
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 200,
    height: 30,
    borderRadius: 1,
    border: "1px solid #b5b5b5",
    boxShadow: 0,
  },
};
