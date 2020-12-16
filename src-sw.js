import {
  registerRoute
} from 'workbox-routing';
import {
  StaleWhileRevalidate
} from 'workbox-strategies';

registerRoute(
  'https://cdn.jsdelivr.net/npm/chart.js@2.8.0',
  new StaleWhileRevalidate(),
);