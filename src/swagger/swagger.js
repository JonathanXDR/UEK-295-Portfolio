import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Hello Express',
    description:
      'Documentation automatically generated by the <b>swagger-autogen</b> module.',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [],
  securityDefinitions: {},
  definitions: {},
  components: {},
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./dist/index.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
  await import('../index.js');
});
