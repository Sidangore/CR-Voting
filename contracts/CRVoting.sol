// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CRVoting {
    address public teacher;
    uint public studentsInElectionCount = 0;

    struct StudentInElection {
        uint id;
        string name;
        uint32 erp;
        uint8 votes;
    }

    constructor() public {
        teacher = msg.sender;
    }

    mapping (address => bool) public students;
    mapping (uint => StudentInElection) public studentsInElectionMapping;

    modifier onlyTeacher () {
        require (msg.sender == teacher, "You are not a Teacher");
        _;
    }

    modifier onlyStudent () {
        require (students[msg.sender] == true, "You are not a Student");
        _;
    }

    function registerStudent (address _studentAddress) public onlyTeacher {
        students[_studentAddress] = true;
    }

    function applyForElection (string memory name, uint32 erp) public onlyStudent {
        studentsInElectionCount++;
        students[msg.sender] = false;
        studentsInElectionMapping[studentsInElectionCount] = StudentInElection(studentsInElectionCount, name, erp, 0);
    }

    function giveVote (uint id) public onlyStudent {
        students[msg.sender] = false;
        studentsInElectionMapping[id].votes += 1;
    }

    function declareWinner () public view onlyTeacher returns (string memory) {
        uint8 max = studentsInElectionMapping[1].votes;
        uint8 student = 1;
        for(uint8 i = 2; i <= studentsInElectionCount; i++) {
            if (max < studentsInElectionMapping[i].votes) {
                max = studentsInElectionMapping[i].votes;
                student = i;
            }
        }
        return studentsInElectionMapping[student].name;
    }
}
