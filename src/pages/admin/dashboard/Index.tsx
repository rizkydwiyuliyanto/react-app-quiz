import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Activity from 'components/sections/dashboard/activity';
import TaskToday from 'components/sections/dashboard/task-today';
import WeekCalendar from 'components/sections/dashboard/week-calendar';
import RunningTask from 'components/sections/dashboard/running-task';
import UpcomingTask from 'components/sections/dashboard/upcoming-task';
import TaskOverview from 'components/sections/dashboard/task-overview';
import MonthlyMentors from 'components/sections/dashboard/monthly-mentors';
import Footer from 'components/common/Footer';
import { spacing } from 'utils/space';
const Index = () => {
  return (
    <>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Stack p={spacing.padding} spacing={spacing.space} direction="column" width={{ xs: 1, md: 'calc(100% - 460px)' }}>
          <Stack
            width={1}
            spacing={spacing.space}
            direction={{ xs: 'column', sm: 'row', md: 'column', xl: 'row' }}
          >
            <RunningTask />
            <Activity />
          </Stack>

          <MonthlyMentors />
          <UpcomingTask />
          <TaskOverview />

          <Box display={{ xs: 'none', md: 'block' }}>
            <Footer />
          </Box>
        </Stack>

        <Box
          width={{ xs: 1, md: 460 }}
          height={{ xs: 'auto', md: 'calc(100vh - 90px)' }}
          overflow="scroll"
          bgcolor="info.main"
          position="sticky"
          top={90}
          sx={{
            '&:hover, &:focus': {
              '&::-webkit-scrollbar-thumb': {
                visibility: 'visible',
              },
            },
          }}
        >
          <Stack p={spacing.padding} spacing={spacing.space} width={1} direction="column">
            <WeekCalendar />
            <TaskToday />
          </Stack>

          <Box display={{ xs: 'block', md: 'none' }}>
            <Footer />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Index;
