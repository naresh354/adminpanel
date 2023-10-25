import DashboardCount from "./DashboardCount"
import { Box } from "@mui/material"
import DashboardTable from "./DashboardTable"


function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
        
        <DashboardCount />
        <DashboardTable />
        
    </Box>
  )
}

export default Dashboard