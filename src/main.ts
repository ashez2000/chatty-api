import { ChattyApplication } from './app';

async function main() {
  const app = new ChattyApplication();
  app.start();
}

main().catch((err) => {
  console.error(err);
});
