// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Checklist {
    struct Task {
        uint id;
        string description;
        bool isCompleted;
    }

    Task[] public tasks;
    uint public nextId;

    function addTask(string memory _description) public {
        tasks.push(Task(nextId, _description, false));
        nextId++;
    }

    function completeTask(uint _id) public {
        require(_id < tasks.length, "Invalid task ID");
        tasks[_id].isCompleted = true;
    }

    function getTasks() public view returns (Task[] memory) {
        return tasks;
    }
}
