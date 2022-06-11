module.exports = {
  //
  graphql: {
    endpoint: "/graphql",
    tracing: true,
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    amountLimit: 50,
  },

  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey:
          "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",
      },
      settings: {
        defaultFrom: "sgwcollins@gmail.com",
        defaultReplyTo: "sgwcollins@gmail.com",
        testAddress: "sgwcollins@gmail.com",
      },
    },
  },
};
