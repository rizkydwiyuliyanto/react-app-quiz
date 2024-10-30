import CustomContainer from 'components/CustomContainer';
import ContentParent from 'components/ContentParent';
import Footer from 'components/Footer';
import CustomPaper from 'components/CustomPaper';
import { Button, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
const index = () => {
  return (
    <>
      <CustomContainer>
        <ContentParent>
          <CustomPaper Title={'Tambah guru'}>
            <Stack padding={4} component="form" mt={3} direction="column" gap={2}>
              <Grid container spacing={2} justifyContent={"space-between"}>
                <Grid item md={3}>
                  <TextField
                    id="username"
                    name="username"
                    variant="filled"
                    color={'secondary'}
                    placeholder="Username"
                    fullWidth
                  />
                </Grid>
                <Grid item md={3}>
                  <TextField
                    id="password"
                    name="password"
                    variant="filled"
                    color={'secondary'}
                    placeholder="Your Password"
                    fullWidth
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="nama_lengkap"
                    name="nama_lengkap"
                    variant="filled"
                    color={'secondary'}
                    placeholder="Nama lengkap"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Button type="submit" variant="contained" size="medium" fullWidth>
                Sign In
              </Button>
            </Stack>
          </CustomPaper>
        </ContentParent>
        <Footer />
      </CustomContainer>
    </>
  );
};

export default index;
