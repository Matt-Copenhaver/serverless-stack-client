const dev = {
  STRIPE_KEY: "pk_test_zzzNUdLN5jbeUjluhVQ1VPQX",
  s3: {
    REGION: "us-east-2",
    BUCKET: "visitorus-test-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://pvynzk7s46.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_bkNA1IlYW",
    APP_CLIENT_ID: "4smbfcrk33fb85dvrknmqs4ehg",
    IDENTITY_POOL_ID: "us-east-2:86225c7e-e07f-43c0-8dce-fb3d5a25327a"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_zzzNUdLN5jbeUjluhVQ1VPQX",
  s3: {
    REGION: "us-east-2",
    BUCKET: "visitorus-test-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://7ayz4g24hg.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Snhkqpm6i",
    APP_CLIENT_ID: "4o0dkci47d2ueh8uetf2ejplg4",
    IDENTITY_POOL_ID: "us-east-2:8fea455a-18a8-471a-8954-baa0d838c985"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
