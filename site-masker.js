export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Change this to the website you want to actually display
    url.hostname = "deadshot.io"; 

    // Create a new request to fetch the destination website
    const modifiedRequest = new Request(url, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "manual" // Prevents the browser from accidentally changing the URL back
    });

    // Fetch the target site data
    const response = await fetch(modifiedRequest);

    // Give the content back to your user
    return response;
  },
};
