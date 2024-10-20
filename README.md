# Checking-Machine-
## Blockchain Checklist
A simple blockchain-based checklist application to track tasks and ensure their immutability. Each task is recorded on the blockchain, guaranteeing transparency and preventing unauthorized modifications.
## Features
* Add tasks: Users can add new tasks to the checklist.
* Complete tasks: Tasks can be marked as completed, with the status recorded on the blockchain.
* Transparency: All tasks and their statuses are visible and cannot be altered post-creation.
* Blockchain-based: Uses smart contracts to store tasks securely and immutably.
## Technologies Used
* Frontend: HTML, JavaScript
* Backend: Node.js, Express (optional)
* Blockchain: Ganache (local blockchain) or any Ethereum test network (e.g., Goerli)
* Smart Contract Language: Solidity
* Web3 Library: web3.js for blockchain interaction
## Project Structure
```/blockchain-checklist/
│
├── /client/                   # Frontend files
│   ├── index.html              # Main HTML page
│   └── app.js                  # JavaScript logic to interact with the blockchain
│
├── /contracts/                 # Smart contract
│   └── Checklist.sol           # Solidity smart contract for task management
│
├── /server/                    # Backend server (optional)
│   └── index.js                # Simple Express server
│
├── /scripts/                   # Deployment scripts
│   └── deploy.js               # Script to deploy the smart contract
│
├── package.json                # Dependencies for the project
└── README.md                   # Documentation
```
## Prerequisites
1. **Node.js and npm** installed:
Download Node.js
2. **Ganache** or any Ethereum test network:
Download Ganache
3. **MetaMask** installed in the browser for interacting with the blockchain.
4. **Install dependencies:**
Run the following command inside the project directory:
```
npm install
```
## How to Run the Project
1. **Deploy the Smart Contract**
Make sure Ganache is running (or connect to a testnet). Then, run the following script to deploy the contract:
```
node scripts/deploy.js
```
Copy the contract address from the output to use it in the frontend.

2. **Run the Backend Server (Optional)**
If you're using the Express server, start it with:
```
npm start
```
This will start the server at http://localhost:3000

3. **Run the Frontend**
Open `client/index.html` in your browser.
Make sure MetaMask is connected to the same network (Ganache or testnet).
Paste the deployed contract address and interact with the checklist.

## Usage
1. **Add a Task:**  Type a task in the input field and click Add Task.
2. **View Tasks:** All tasks will be displayed in the list with their status.
3. **Complete a Task:** Update task status directly through the contract (can be extended in the frontend).

## Future Improvements
* Add **token rewards** for completed tasks.
* Implement **notifications** or reminders for pending tasks.
* Improve the **UI** with React or another frontend framework.
* Deploy on a public Ethereum testnet (like **Goerli** or **Sepolia**).
