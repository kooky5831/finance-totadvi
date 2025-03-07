import { Helmet } from 'react-helmet-async';
// sections
import FiveView from 'src/sections/Security/help/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Help</title>
      </Helmet>

      <FiveView />
    </>
  );
}
