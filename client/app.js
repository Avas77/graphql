const GRAPHQL_URL = "http://localhost:4000/";

async function getGreeting() {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query {
                greeting
            }
        `,
    }),
  });
  const { data } = await response.json();
  return data;
}

getGreeting().then(({ greeting }) => {
  const el = document.querySelector("h1");
  el.textContent = greeting;
});
