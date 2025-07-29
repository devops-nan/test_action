const core = require('@actions/core');
try {
  const name = core.getInput('name');
  console.log(`Hola ${name}`);
  run();
} catch (error) {
  core.setFailed(error.message);
}