const contractABI = [/* Paste contract ABI here */];
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

async function loadTasks() {
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const tasks = await contract.methods.getTasks().call();
    
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.description} - ${task.isCompleted ? "Completed" : "Pending"}`;
        taskList.appendChild(li);
    });
}

async function addTask() {
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const accounts = await web3.eth.requestAccounts();

    const taskInput = document.getElementById("taskInput").value;
    await contract.methods.addTask(taskInput).send({ from: accounts[0] });
    
    loadTasks();  // Reload the task list
}

window.onload = loadTasks;
