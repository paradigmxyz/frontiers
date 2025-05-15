/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";

type State = { descriptionIndex: number };

const app = new Frog<{ State: State }>({
  assetsPath: "/",
  basePath: "/api",
  initialState: {
    descriptionIndex: 0,
  },
});

app.frame("/", (c) => {
  return c.res({
    image: "/images/frames/1.png",
    intents: [
      <Button.Link href="https://events.paradigm.xyz/frontiers2025">APPLY NOW</Button.Link>,
      <Button action="/descriptions">Next →</Button>,
      <Button.Link
        href={`https://warpcast.com/~/compose?text=${encodeURIComponent(
          "Come to Frontiers! https://frontiers.paradigm.xyz"
        )}`}
      >
        Share Event
      </Button.Link>,
    ],
  });
});

app.frame("/descriptions", (c) => {
  const { buttonValue, deriveState } = c;
  const { descriptionIndex } = deriveState((previousState) => {
    if (buttonValue === "back") previousState.descriptionIndex--;
    if (buttonValue === "next") previousState.descriptionIndex++;
  });

  const images = [
    "/images/frames/2.png",
    "/images/frames/3.png",
    "/images/frames/4.png",
    "/images/frames/5.png",
    "/images/frames/6.png",
  ];

  return c.res({
    image: images[descriptionIndex],
    intents: [
      <Button action={descriptionIndex === 0 ? "/" : undefined} value="back">
        ← Back
      </Button>,
      <Button
        action={descriptionIndex === images.length - 1 ? "/end" : undefined}
        value="next"
      >
        Next →
      </Button>,
    ],
  });
});

app.frame("/end", (c) => {
  return c.res({
    image: "/images/frames/7.png",
    intents: [
      <Button action="/descriptions" value="back">
        ← Back
      </Button>,
      <Button.Link href="https://events.paradigm.xyz/frontiers2025">APPLY NOW</Button.Link>,
      <Button.Link
        href={`https://warpcast.com/~/compose?text=${encodeURIComponent(
          "Come to Frontiers! https://frontiers.paradigm.xyz"
        )}`}
      >
        Share Event
      </Button.Link>,
    ],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
