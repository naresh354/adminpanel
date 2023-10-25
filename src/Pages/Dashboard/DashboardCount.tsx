import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



function DashboardCount() {
  return (
    <>
      <Grid container sx={{ mt: 2 }} gap={1.5}>
        <Grid xs={2.9}>

            <Card>
            <CardContent>
            <Typography
                  gutterBottom
                  sx={{ color: "#71717A", fontSize: "0.65rem", textTransform: "uppercase" }}
                  component="div"
                >
                  Today’s Sale
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                     sx={{ fontWeight: 700, fontSize: "1.2rem" }}
                    color="#18181B"     >
                    ₹12,426
                  </Typography>
                  <Typography sx={{ color: "#22C55E" }}>+ 36%</Typography>
                </Box>
            </CardContent>
            </Card>
              
        </Grid>
        <Grid xs={2.9}>
          <Card sx={{ maxWidth: 345 }}>
           
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "#71717A", fontSize: "0.65rem", textTransform: "uppercase" }}
                  component="div"
                >
                  Today’s Sale
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                     sx={{ fontWeight: 700, fontSize: "1.2rem" }}
                    color="#18181B"
                  >
                    ₹2,38,485
                  </Typography>
                  <Typography sx={{ color: "#EF4444" }}>+ 14%</Typography>
                </Box>
              </CardContent>
           
          </Card>
        </Grid>
        <Grid xs={2.9}>
          <Card sx={{ maxWidth: 345 }}>
            
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "#71717A", fontSize: "0.65rem", textTransform: "uppercase" }}
                  component="div"
                >
Total ORders
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                     sx={{ fontWeight: 700, fontSize: "1.2rem" }}
                    color="#18181B"
                  >
                    84,382
                  </Typography>
                  <Typography sx={{ color: "#22C55E" }}>+ 36%</Typography>
                </Box>
              </CardContent>
          
          </Card>
        </Grid>
        <Grid xs={2.9}>
          <Card sx={{ maxWidth: 345 }}>
           
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "#71717A", fontSize: "0.65rem", textTransform: "uppercase" }}
                  component="div"
                >
Total Customers
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                     sx={{ fontWeight: 700, fontSize: "1.2rem" }}
                    color="#18181B"
                  >
                    33,493
                  </Typography>
                  <Typography sx={{ color: "#22C55E" }}>+ 36%</Typography>
                </Box>
              </CardContent>
            
          </Card>
        </Grid>
      </Grid>

 



    </>
  );
}

export default DashboardCount;
