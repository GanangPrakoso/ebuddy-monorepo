# Monorepo Setup with Turborepo

This repository is a monorepo setup using [Turborepo](https://turbo.build/) to manage a **Next.js frontend** and an **Express.js TypeScript backend** efficiently.

## 📁 Project Structure

```
monorepo-root/
│── apps/
│   ├── frontend-repo/  # Next.js 14 app (React MUI, Redux, Firebase Auth)
│   ├── backend-repo/   # Express.js TypeScript API
│── packages/
│   ├── shared/    # Shared utilities, types, or
│── turbo.json
│── package.json
│── .gitignore
│── README.md
```

## 🚀 Getting Started

### 1️⃣ Prerequisites

Ensure you have the following installed:

- **Node.js** (>=18)
- **NPM** (recommended) or PNPM/YARN

### 2️⃣ Install Dependencies

```sh
npm run install
```

### 3️⃣ Running the Development Servers

Start both the frontend and backend in parallel:

```sh
npm run turbo run dev --parallel
```

Alternatively, you can run each app separately:

```sh
# Start frontend
cd apps/frontend && npm run dev

# Start backend
cd apps/backend && npm run dev
```

### 4️⃣ Build the Apps

```sh
npx turbo run build
```
