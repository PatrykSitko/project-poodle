// @ts-ignore
import server, { port } from "./server.conf";

const running = server.listen(port, () => {
  // @ts-ignore
  console.log("http://localhost:" + running.address().port);
});
