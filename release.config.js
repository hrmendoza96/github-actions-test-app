module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/hrmendoza96/github-actions-test-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
