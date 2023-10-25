import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
export const SetUpSecondaryHeader = () => {
  const [alignment, setAlignment] = React.useState("");
  const [titleChange, setTitleChange] = React.useState("");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  const title = [
    { id: 1, title: "Title1" },
    { id: 2, title: "Title2" },
    { id: 3, title: "Title3" },
  ];
  const Dropdown = [
    { id: 1, title: "Title1" },
    { id: 2, title: "Title2" },
    { id: 3, title: "Title3" },
  ];
  const HandleSelectChange = (e: any) => {
    setTitleChange(e.target.value);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{ height: "30px" }}
      >
        {title?.map((x: any) => {
          return (
            <ToggleButton
              value={x?.id}
              sx={{ fontSize: "12px", textTransform: "none", color: "#1D2939" }}
            >
              {x?.title}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <FormControl variant="outlined" size="small" sx={{ height: "20px" }}>
          <InputLabel sx={inputLabelStyle}>
          Select
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name=""
            value={titleChange}
            onChange={HandleSelectChange}
            label="Transport mode"
            placeholder="Assigned To"
            sx={selectInputFieldStyle}
          >
            {Dropdown?.length > 0 &&
              Dropdown?.map((x: any) => {
                return (
                  <MenuItem
                    value={x?.id}
                    sx={{
                      fontSize: "11px",
                      "&:hover": {
                        backgroundColor: "#F6F6FA", // Customize background color on hover
                        color: "#A73EBC", // Customize text color on hover
                      },
                    }}
                    key={x?.id}
                  >
                    {x?.title}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3F5DF3",
            textTransform: "none",
            fontSize: "12px", height:"30px"
          }}
          startIcon={<AddIcon style={{ fontSize: "14px" }} />}
        >
          Add new
        </Button>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            fontSize: "12px",
            color: "#1D2939",
            borderColor: "#D0D5DD", height:"30px"
          }}
          startIcon={<FilterListIcon style={{ fontSize: "14px" }} />}
        >
          Filters
        </Button>
      </Box>
    </Box>
  );
};
const selectInputFieldStyle = {
  width: 200, // Customize width
  height: 35,
  fontSize: "11px",
  color: "primary.main",
};
const inputLabelStyle = {
  fontSize: "12px",
  textAlign: "center",
};
