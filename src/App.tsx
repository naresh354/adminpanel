import { Routes, Route } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard/Index";
import { SetUpContainer } from "./Pages/Setup";
import Header from "./Component/Header";
import { ThemeProvider, Typography } from '@mui/material';
import { createMuiTheme } from '@mui/material/styles';


const theme = createMuiTheme({
  typography: {
    fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
  },
});


function App() {
  

  return (
    <>
   <ThemeProvider theme={theme}>
       <Header />
       <Routes>
         <Route path="*" element={<Typography sx={{ textAlign: "center", mt: 10 }}>Page Not Found</Typography>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Setup" element={< SetUpContainer />} />
      </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
