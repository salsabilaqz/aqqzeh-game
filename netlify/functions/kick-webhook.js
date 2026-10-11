export default async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }

  return new Response("Webhook endpoint ready for setup", {
    status: 200,
  });
};
