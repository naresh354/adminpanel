import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomizedProgressBars from "./ProgressBar"

function DashboardTable() {
  return (
    <>
      <Grid container gap={1.5}>
        <Grid
          xs={7.9}
          sx={{
            width: "150px", // Take full width of parent
            height: "22vh", // Take full height of parent
            backgroundColor: "#ffffff",
            // borderRadius: "2", // Add border radius
            // Add padding

            borderRadius: "20px",
            mt: 2,
            // overflow: "auto",
          }}
        >
          <Card>
         
              <CardContent>
                <Box>
                  {" "}
                  <Box sx={{ 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: "700", fontSize: "0.8rem" }}>
                      Transactions
                    </Typography>

                    <Button
                    sx={{
                      color: "#F5821F",
                      fontSize: "0.6rem",
                      textDecoration: "none",
                    }}
                  >
                    See All Transactions &gt;
                  </Button>{" "}
                   
                  </Box>
                 

                   <Typography sx={{ fontSize: "0.8rem" , mt: -0.5 }}>
                      Lorem ipsum dolor sit amet, consectetur adipis.
                    </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 1,
                    mt: 1
                  }}
                >
                  <Button
                    sx={{
                      background: "#DCFCE7",
                      color: "#14532D",
                      borderRadius: "20px",
                      fontSize: "0.5rem",
                      width: "80px",
                      height: "25px",
                      p: 1
                    }}
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
                    Completed
                  </Button>

                  <Box>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: "600" }}>
                      Visa card **** 4831
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#71717A" }}>
                      Card payment
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: "600" }}>
                      ₹182.94
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#71717A" }}>
                      Jan 17, 2022
                    </Typography>
                  </Box>

                  <Typography sx={{ color: "#71717A", fontSize: "0.9rem" }}>
                    Ticket
                  </Typography>

                  <MoreHorizIcon />
                </Box>

                <Divider />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 1,
                  }}
                >
                  <Button
                    sx={{
                      background: "#DCFCE7",
                      color: "#14532D",
                      borderRadius: "20px",
                      fontSize: "0.5rem",
                      width: "80px",
                      height: "25px",
                      p: 1
                    }}

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
                    Completed
                  </Button>

                  <Box>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: "600" }}>
                      Visa card **** 4831
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#71717A" }}>
                      Card payment
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: "600" }}>
                      ₹182.94
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#71717A" }}>
                      Jan 17, 2022
                    </Typography>
                  </Box>

                  <Typography sx={{ color: "#71717A", fontSize: "0.9rem" }}>
                    Ticket
                  </Typography>

                  <MoreHorizIcon />
                </Box>

                <Divider />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 1,
                  }}
                >
                  <Button
                    sx={{
                      background: "#FEF9C3",
                      color: "#14532D",
                      borderRadius: "20px",
                      fontSize: "0.5rem",
                      width: "80px",
                      height: "25px",
                      p: 1
                    }}

                    startIcon={
                      <Box
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#FACC15",
                        }}
                      ></Box>
                    }
                  >
                    Pending
                  </Button>

                  <Box>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: "600" }}>
                      Visa card **** 4831
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#71717A" }}>
                      Card payment
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: "600" }}>
                      ₹182.94
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#71717A" }}>
                      Jan 17, 2022
                    </Typography>
                  </Box>

                  <Typography sx={{ color: "#71717A", fontSize: "0.9rem" }}>
                    Ticket
                  </Typography>

                  <MoreHorizIcon />
                </Box>
              </CardContent>
            
          </Card>
        </Grid>
        <Grid
          xs={3.9}
          sx={{
            width: "150px", // Take full width of parent
            height: "22vh", // Take full height of parent
            backgroundColor: "#ffffff",
            // borderRadius: "2", // Add border radius
            // Add padding

            borderRadius: "20px",
            mt: 2,
            // overflow: "auto",
          }}
        >
          <Card>
            
              <CardContent>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontWeight: "700", fontSize: "0.8rem" }} >Sports</Typography>
                  <Typography sx={{ fontSize: "0.7rem" }}>Last 7 Days &gt;</Typography>
                </Box>


                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 3
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem" }} >Cricket</Typography>
                  <Typography sx={{ fontSize: "0.8rem" }}>1,43,382gms</Typography>
                </Box>

                <CustomizedProgressBars  value={80} />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 3
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem" }} >TT</Typography>
                  <Typography sx={{ fontSize: "0.8rem" }}>87,974gms</Typography>
                </Box>

                <CustomizedProgressBars value={60} />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 3
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem" }} >Hockey</Typography>
                  <Typography sx={{ fontSize: "0.8rem" }}>45,211gms</Typography>
                </Box>

                <CustomizedProgressBars value={40} />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 3
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem" }} >Rugby</Typography>
                  <Typography sx={{ fontSize: "0.8rem" }}>21,893kat</Typography>
                </Box>

                <CustomizedProgressBars value={20}/>

                




              </CardContent>
          
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardTable;
