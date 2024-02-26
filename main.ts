Deno.serve(async (request) => {
  try {
    const formData = await request.formData();
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    // access_token
    const accessToken = formData.get("access_token");
    if (!accessToken) {
      throw Error("No access token provided");
    }

    // token_type
    const tokenType = formData.get("token_type");
    if (!tokenType) {
      throw Error("No token_type provided");
    }

    // expires_in
    const expiresIn = formData.get("expires_in");
    if (!expiresIn) {
      throw Error("No expires_in provided");
    }

    // scope
    const scope = formData.get("scope");
    if (!scope) {
      throw Error("No scope provided");
    }

    // id_token
    const idToken = formData.get("id_token");
    if (!idToken) {
      throw Error("No id_token provided");
    }

    // session_state
    const sessionState = formData.get("session_state");
    if (!sessionState) {
      throw Error("No session_state provided");
    }

    return new Response("FormData received successfully!");
  } catch (error) {
    let message = "An unknown error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return new Response(message, { status: 500 });
  }
});
