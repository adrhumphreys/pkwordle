// https://s9c7abw9dj.execute-api.us-east-2.amazonaws.com/default/getGame?gameId=543

import fs from "fs";

function range(size, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

async function getAll() {
  const responses = [];

  for (const x in range(545)) {
    console.log(x);
    responses.push(
      fetch(
        `https://s9c7abw9dj.execute-api.us-east-2.amazonaws.com/default/getGame?gameId=${x}`
      ).then((res) => res.json())
    );
  }
  const res = await Promise.all(responses);

  fs.writeFileSync("./connections-archive.json", JSON.stringify(res));

  console.log(res);
}

getAll();
