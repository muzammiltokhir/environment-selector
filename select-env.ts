import inquirer from 'inquirer';

// Get CLI argument or env variable
const argEnv = process.argv.find(arg => arg.startsWith('--env='));
const cliEnv = argEnv?.split('=')[1] ?? process.env.ENV;

async function selectEnvironment() {
  const environments = ['DEV', 'STAGING', 'PROD'];

  if (cliEnv && environments.includes(cliEnv)) {
    console.log(`Environment provided: ${cliEnv}`);
    runTests(cliEnv);
    return;
  }

  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'env',
      message: 'Select the environment:',
      choices: environments,
    },
  ]);

  runTests(answer.env);
}

function runTests(env: string) {
  console.log(`Running tests for: ${env}`);
  // Add your test runner here, e.g., Jest
}

selectEnvironment();
