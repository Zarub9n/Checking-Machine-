const Web3 = require('web3');
const fs = require('fs');
const solc = require('solc');

// Configure provider (Ganache or another blockchain)
const web3 = new Web3('http://localhost:8545');

// Compile the contract
const source = fs.readFileSync('contracts/Checklist.sol', 'utf8');
const compiledContract = solc.compile(source, 1).contracts[':Checklist'];

// Prepare contract
const contract = new web3.eth.Contract(JSON.parse(compiledContract.interface));

// Get accounts and deploy contract
web3.eth.getAccounts().then(accounts => {
    const deployOptions = {
        data: '0x' + compiledContract.bytecode,
        arguments: []
    };

    contract.deploy(deployOptions).send({
        from: accounts[0],
        gas: 1500000
    }).then(newContractInstance => {
        console.log('Contract deployed at:', newContractInstance.options.address);
    });
});
