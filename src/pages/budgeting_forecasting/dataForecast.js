import { Helmet } from 'react-helmet-async';
import DataForecast from 'src/sections/Bugeting_Forecasting/forecast/view';
// sections

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Details</title>
      </Helmet>

      <DataForecast />
    </>
  );
}
