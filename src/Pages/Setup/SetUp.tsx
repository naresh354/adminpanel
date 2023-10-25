import { SetUpHeader } from './SetUpHeader'
import { SetUpSecondaryHeader } from './SetUpSecondaryHeader'
import { SetUpTable } from './SetUpTable'
import { Box, Card, CardContent } from '@mui/material'

export const SetUp = () => {
  return (
    <Box sx={{ mt: 1, pt: 1, pl: 1, pr: 1}}>
       <Card>
        <CardContent>
        <SetUpHeader />
        <SetUpSecondaryHeader />
        <SetUpTable />
        </CardContent>
       </Card>
    </Box>
  )
}
