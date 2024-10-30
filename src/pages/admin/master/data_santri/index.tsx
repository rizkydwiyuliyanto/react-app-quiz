import { Box, Stack } from '@mui/material';
import Footer from 'components/common/Footer';
import { spacing } from 'utils/space';

const index = () => {
  return (
    <>
      <Stack p={spacing.padding} spacing={spacing.space} direction="column">
        <Stack
          width={1}
          spacing={spacing.space}
          direction={{ xs: 'column', sm: 'row', md: 'column', xl: 'row' }}
        >
            <p>Hello world</p>
        </Stack>

        <Box display={{ xs: 'none', md: 'block' }}>
          <Footer />
        </Box>
      </Stack>
    </>
  );
};

export default index;
