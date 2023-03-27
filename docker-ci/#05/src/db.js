import Redis from "redis";

function DB() {
  let client;

  function createClient() {
    const rClient = Redis.createClient({
      socket: {
        host: "count-redis",
        port: 6000,
      },
      legacyMode: true,
    });
    return rClient;
  }

  return (() => {
    if (!client) client = createClient();

    return client;
  })();
}

export default DB();
