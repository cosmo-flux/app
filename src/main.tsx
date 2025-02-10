import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App, Frontend } from '@cosmo-flux/foundation.subscriber';
import { marketingMfe } from '@cosmo-flux/marketing.marketing-mfe';
import { bookingMfe } from '@cosmo-flux/booking.booking-mfe';

const app = new App();
const frontends: Frontend[] = [marketingMfe, bookingMfe];
frontends.forEach((frontend) => frontend(app));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>{app.renderApp()}</BrowserRouter>
  </StrictMode>
);
