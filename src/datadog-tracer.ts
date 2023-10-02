import { datadogRum } from '@datadog/browser-rum';

const config = {
  clientToken: '9b471f9a5d0734a8e45e8f9511af2d7c48ea3cf7',
  applicationId: '9b471f9a5d0734a8e45e8f9511af2d7c48ea3cf7',
  site: 'ap1.datadoghq.com',
  service: 'webapp',
  env: 'dev',
  version: '1.0.0',
  sampleRate: 100,
};

datadogRum.init(config);