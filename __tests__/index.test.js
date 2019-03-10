import { CLIEngine } from 'eslint';

test('all rules are configured correctly', () => {
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js'
  });

  expect(cli.executeOnText('var foo\n')).toBeTruthy();
});
