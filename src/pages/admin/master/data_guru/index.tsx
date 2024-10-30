import { Box, Button,Stack } from '@mui/material';
import Footer from 'components/common/Footer';
// import Activity from 'components/sections/dashboard/activity';
import { spacing } from 'utils/space';
import CustomPaper from 'components/CustomPaper';
import CustomTable from "components/CustomTable";
import { NavLink } from 'react-router-dom';
const Form = () => {
  return (
    <NavLink to={"/pages/master/data_guru/tambah"}>
      <Button variant={"contained"}>Tambah data guru</Button>
    </NavLink>
  );
};

const index = () => {
  return (
    <>
      <Stack p={spacing.padding} spacing={spacing.space} direction="column">
        <Stack
          width={1}
          spacing={spacing.space}
          direction={{ xs: 'column', sm: 'row', md: 'column', xl: 'row' }}
        >
          <CustomPaper Title={'Data guru'} Form={<Form />}>
              <CustomTable/>
          </CustomPaper>
          {/* <Activity /> */}
        </Stack>

        <Box display={{ xs: 'none', md: 'block' }}>
          <Footer />
        </Box>
      </Stack>
    </>
  );
};

export default index;
