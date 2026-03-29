# Monorepo Demo

## Environment Prereqs / Initial Setup

[Volta](https://volta.sh/) - manages Node and pnpm versions automatically
[Docker](https://www.docker.com/) - runs service containers for the project (database, logging, etc)

## Environment Variables

Copy `.env.example` to `.env` — default values align with the container default configurations but can be modified as needed.

## Running Services

Run docker compose up -d from within a container's folder to start it individually.

## Running Apps

Start scripts are available in the root `package.json`. See each app's `README.md` for further details.

## Tech Stack Overview

- [Volta](https://volta.sh/)
- [PNPM Workspaces](https://pnpm.io/pnpm-workspace_yaml)
- [Turborepo](https://turbo.build/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/)
- [Lint Staged](https://github.com/lint-staged/lint-staged)

## Apps

The `/apps` folder houses the individual UI and API applications for the project. Any project specific information can be found in their corresponding `README`.

## Containers

The `/containers` folder houses the `docker-compose` files for any containerized dependencies the application may need (database, message broker, logger, etc)

## Useful Links

### Development

Seq: http://localhost:5341/
