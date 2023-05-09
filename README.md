# DigitalWalletFullStack

# Ethereum Wallet Analytics

Ethereum Wallet Analytics is a generic platform that returns analytics on Ethereum wallets. The project includes a backend built with NestJS and a frontend built with Next.js.

## Requirements

- Node.js (v14 or higher)
- Yarn (to manage project dependencies)
- PostgreSQL (as the database)

## Environment Setup

1. Clone this repository to your local machine.
2. Install the project dependencies:

   ```sh
   cd DigitalWalletFullStack
   yarn prepare
   ```

3. Set up the database and necessary environment variables:

- Create a database in PostgreSQL.
- Copy the .env.example to .env and fill in the environment variables according to your database configuration and Etherscan API Key.

##Running

All in one

```sh
  yarn go
```

Without installing dependencies

```sh
  yarn dev
```

Just Backend

```sh
cd eth-wallet-analytics
yarn start:dev
```

Just Frontend

```sh
cd eth-wallet-dashboard
yarn dev
```

##Features
This project allows you to:

1. Add and display wallet addresses.
2. Select and order favorite wallets.
3. Determine if a wallet is old (if its first transaction was performed at least one year ago).
4. Get and edit exchange rates between Euro, US Dollar, and Ethereum.
5. Calculate a wallet's balance in Euro or US Dollar using the exchange rates.

##Development
This project uses:

 - NestJS for the backend.
 - Next.js for the frontend.
 - TypeORM for communication with the database.
 - Axios for HTTP requests between the frontend and backend.
 - Etherscan API for obtaining information about Ethereum wallets.
 - Tailwind CSS for frontend design.
 - Context for state management on the frontend.