import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { ListComponent } from "./ListComponent";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const sortedRows: any = [
  {
    id: 1,
    name: "Olivia Rhye",
    userName: "@olivia",
    status: "Active",
    role: "Product Designer",
    email: "olivia@untitledui.com",
    teams: [
      { id: 1, teamName: "Design" },
      { id: 2, teamName: "Product" },
      { id: 3, teamName: "Marketing" },
      { id: 4, teamName: "Marketing" },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    userName: "@olivia",
    status: "Active",
    role: "Product Designer",
    email: "olivia@untitledui.com",
    teams: [
      { id: 1, teamName: "Design" },
      { id: 2, teamName: "Product" },
      { id: 3, teamName: "Marketing" },
      { id: 4, teamName: "Marketing" },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    userName: "@olivia",
    status: "Active",
    role: "Product Designer",
    email: "olivia@untitledui.com",
    teams: [
      { id: 1, teamName: "Design" },
      { id: 2, teamName: "Product" },
      { id: 3, teamName: "Marketing" },
      { id: 4, teamName: "Marketing" },
    ],
  },
  {
    id: 1,
    name: "Olivia Rhye",
    userName: "@olivia",
    status: "Active",
    role: "Product Designer",
    email: "olivia@untitledui.com",
    teams: [
      { id: 1, teamName: "Design" },
      { id: 2, teamName: "Product" },
      { id: 3, teamName: "Marketing" },
      { id: 4, teamName: "Marketing" },
    ],
  },
];
export const SetUpTable = () => {
  return (
    <div>
      <TableContainer sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={tableRowStyle}>
              <TableCell align="center" sx={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                {" "}
                <FormControlLabel
                  sx={{ width: "10px" }}
                  control={
                    <Checkbox
                      sx={{
                        color: "#A3A3A3",
                        fontSize: "10px",
                        "&.Mui-checked": {
                          color: "#5C5B5B",
                        },
                        "& .MuiSvgIcon-root": { fontSize: 15 },
                      }}
                      // onChange={handleCheckboxChange}
                      // checked={formik.values.priority === 1} // Check if this row is the currently checked row
                      name="priority"
                    />
                  }
                  label={""}
                />
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    color: "#667085",
                    ml: 6,
                    textAlign: "end",
                  }}
                >
                  Name
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 700, cursor: "pointer" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      color: "#667085",
                      textAlign: "center",
                    }}
                  >
                    Status{" "}
                  </Typography>
                  <ArrowDownwardIcon
                    sx={{ fontSize: "1rem", color: "#667085", ml: 1 }}
                  />
                </Box>
              </TableCell>
              <TableCell align="center" sx={{ cursor: "pointer" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      color: "#667085",
                      textAlign: "center",
                    }}
                  >
                    Role{" "}
                  </Typography>
                  <HelpOutlineIcon
                    sx={{ fontSize: "1rem", color: "#667085", ml: 1 }}
                  />
                </Box>
              </TableCell>
              <TableCell align="center">
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    color: "#667085",
                    textAlign: "center",
                  }}
                >
                  Email address
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    color: "#667085",
                    textAlign: "center",
                  }}
                >
                  Teams
                </Typography>
              </TableCell>

              <TableCell align="center">
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    color: "#667085",
                    textAlign: "center",
                  }}
                >
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.length > 0 &&
              sortedRows.map((row: any, index: number) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "left",
                      }}
                    >
                      <FormControlLabel
                        sx={{ width: "10px" }}
                        control={
                          <Checkbox
                            sx={{
                              color: "#A3A3A3",
                              fontSize: "10px",
                              "&.Mui-checked": {
                                color: "#5C5B5B",
                              },
                              "& .MuiSvgIcon-root": { fontSize: 15 },
                            }}
                            // onChange={handleCheckboxChange}
                            // checked={formik.values.priority === 1} // Check if this row is the currently checked row
                            name="priority"
                          />
                        }
                        label={""}
                      />
                     <Box sx={{ ml: 2, display: "flex" }}>
                     <Avatar sx={{ height: 25, width: 25 }}></Avatar>
                      <Box sx={{ ml: 1 }}>
                        <Typography
                          sx={{
                            ...tableCellStyle,
                            fontSize: "0.7rem",
                            textAlign: "left",
                          }}
                        >
                          Olivia Rhye
                        </Typography>
                        <Typography
                          sx={{ fontSize: "0.7rem", textAlign: "left" }}
                        >
                          @olivia
                        </Typography>
                      </Box>
                     </Box>
                    
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      sx={statusButton}
                      variant="contained"
                      startIcon={
                        <Box
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#12B76A",
                          }}
                        ></Box>
                      }
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                  <TableCell sx={tableCellStyle} align="center">
                    {row.role}
                  </TableCell>
                  <TableCell sx={tableCellStyle} align="center">
                    {row.email}
                  </TableCell>
                  <TableCell sx={{}} align="center">
                    <Box sx={{ display: "flex" }}>
                      {row.teams.slice(0, 3).map((x: any) => {
                        return (
                          <Chip
                            sx={{
                              textTransform: "none",
                              backgroundColor: "#F9F5FF",
                              color: "#6941C6",
                              fontWeight: 500,
                              fontSize: "11px",
                            }}
                            size="small"
                            label={x.teamName}
                          />
                        );
                      })}
                      {row.teams.length > 3 && (
                        <Chip
                          sx={{
                            textTransform: "none",
                            backgroundColor: "#F9F5FF",
                            color: "#344054",
                            fontWeight: 500,
                            fontSize: "11px",
                          }}
                          size="small"
                          label={"+4"}
                        />
                      )}
                    </Box>
                  </TableCell>

                  <TableCell sx={tableCellStyle} align="center">
                    <DeleteIcon sx={{ fontSize: "15px" }} />
                    <ModeEditOutlineIcon sx={{ fontSize: "15px", ml: 1 }} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Divider />

        {/* {sortedRows.length > 0 && (
          <TablePagination
            sx={muiCustomization.tablePagination}
            rowsPerPageOptions={ROW_PER_OPTIONS}
            component="div"
            count={100}
            rowsPerPage={10}
            page={5}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )} */}
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          mt: 1,
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            height: "2rem",
            color: "#344054",
            fontSize: "0.6rem",
            borderRadius: "10px",
            border: "1px solid #D0D5DD",
          }}
          startIcon={
            <Box
              sx={{
                color: "#344054",
              }}
            >
              <KeyboardBackspaceIcon sx={{ fontSize: "1rem" }} />
            </Box>
          }
        >
          Previous
        </Button>
        <Stack spacing={2}>
          <Pagination count={10} />
        </Stack>
        <Button
          variant="outlined"
          sx={{
            height: "2rem",
            color: "#344054",
            fontSize: "0.6rem",
            borderRadius: "10px",
            border: "1px solid #D0D5DD",
          }}
          endIcon={
            <Box
              sx={{
                color: "#344054",
              }}
            >
              <EastIcon sx={{ fontSize: "1rem" }} />
            </Box>
          }
        >
          Next
        </Button>
      </Box>
    </div>
  );
};
const tableCellStyle = {
  fontSize: "11px",
  color: "#667085",
  fontWeight: "600",
};

const tableRowStyle = {
  "&:last-child td, &:last-child th": {
    border: 0,
    fontSize: "11px",
    fontWeight: 500,
    width: "220px",
  },
  backgroundColor: "#F6F6FA",
};
const statusButton = {
  textTransform: "none",
  backgroundColor: "#ECFDF3",
  color: "#027A48",
  fontWeight: 500,
  fontSize: "12px",
  boxShadow: "none",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#ECFDF3",
    boxShadow: "none",
  },
};
