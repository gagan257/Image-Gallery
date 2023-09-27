import { resolve } from "path";

export default async function test() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>Hello World!</div>;
}
