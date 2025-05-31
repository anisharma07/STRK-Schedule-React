## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Starknet wallet (Argent X or Braavos)
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/strk-schedule.git
cd strk-schedule
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Create a `.env` file in the root directory with the following content:

```env
VITE_PUBLIC_CONTRACT_ADDRESS=0x07b46771d0012e97bd23a4eadcd3511230a0c97f827f0068cd339e7100d36df4
VITE_PUBLIC_RPC_URL=https://starknet-sepolia.public.blastapi.io
VITE_PINATA_API_KEY=your_pinata_api_key
VITE_PINATA_API_SECRET=your_pinata_api_secret
VITE_PINATA_JWT=your_pinata_jwt_token
```

Replace the Pinata credentials with your own (sign up at [pinata.cloud](https://www.pinata.cloud) if you don't have an account).

Start the development server:

```bash
ionic serve
```

Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
/src
  /components          # Reusable UI components
  /pages               # Main application pages
  /hooks               # Custom React hooks
    /contractRead.tsx  # Hooks for reading from blockchain
    /contractWrite.tsx # Hooks for writing to blockchain
  /utils               # Utility functions
  /assets              # Static assets like images
  /theme               # Styling and theme configuration
  App.tsx              # Main application component
  main.tsx             # Application entry point
```

## Smart Contract Interaction

The application interacts with Starknet smart contracts to:

- Register and authenticate users
- Store health measurements (blood sugar, HbA1c, weight)
- Track medication adherence
- Manage exercise routines
- Store health records securely

Sensitive data is stored on IPFS with only the hash references stored on-chain for privacy.

## Architectural Flow

![Image 1](/public/assets/screenshots/Arch1.png)
![Image 2](/public/assets/screenshots/Arch2.png)
![Image 3](/public/assets/screenshots/Arch3.png)
