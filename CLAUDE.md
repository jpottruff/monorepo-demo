# Claude Guidelines

## Git Rules

- **Never commit directly to `main`** — always work on a branch
- **Never push** — `git push` is blocked; the user handles all pushes and PR creation
- **Commit after each logical unit of work** (e.g. after adding a component, after wiring up a service, after adding tests) — not one giant commit at the end, and not after every single line change
- **Branch naming convention**: `<type>/<number>`
  - `feature/<number>` — new functionality
  - `bug/<number>` — bug fixes
  - `chore/<number>` — maintenance, tooling, config changes
  - `issue/<number>` — general issues that don't clearly fit the above
  - e.g. `feature/15`
  - e.g. `bug/42`
  - e.g. `chore/7`

## Workflow

When working on an issue:
1. Create a branch from `main` using the naming convention above
2. Commit after each logical unit of work with clear commit messages
3. When implementation is complete, present a summary and ask the user to review
4. Only push or create a PR when explicitly asked to do so
