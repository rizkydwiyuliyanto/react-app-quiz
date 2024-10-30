import { Button  } from '@mui/material';
import CustomPaper from 'components/CustomPaper';
import CustomTable from 'components/CustomTable';
import { NavLink } from 'react-router-dom';
import CustomContainer from 'components/CustomContainer';
import ContentParent from 'components/ContentParent';
import Footer from 'components/Footer';
const Form = () => {
  return (
    <NavLink to={'/pages/master/data_santri/tambah'}>
      <Button variant={'contained'}>Tambah data guru</Button>
    </NavLink>
  );
};

const index = () => {
  return (
    <>
      <CustomContainer>
        <ContentParent>
          <CustomPaper Title={'Data guru'} Form={<Form />}>
            <CustomTable />
          </CustomPaper>
          {/* <Activity /> */}
        </ContentParent>
        <Footer />
      </CustomContainer>
    </>
  );
};

export default index;
