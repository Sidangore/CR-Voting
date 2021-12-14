// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CRVoting {
   // Structure
    struct Student {
        string name;
        string erp;
        uint8 votes;
        bool voted;
        Status state;
    }

    // Enums
    enum Status {
        Default,
        Student,
        StudentInElection,
        Elected
    }

    // Variables
    address public teacher;

    constructor() public {
        teacher = msg.sender;
    }

    // Mappings
    mapping (address => Student) public students;

    // Arrays
    address[] public studentsInElection;

    // Events

    // Modifiers
    modifier onlyTeacher () {
        require (msg.sender == teacher, "Only Teacher can call this");
        _;
    }

    modifier onlyStudents () {
        require(students[msg.sender].state == Status.Student, "Only students can do this");
        require(students[msg.sender].voted == false, "You have already voted. Not allowed to do this");
        _;
    }

    // Functions : to register student of the class
    function registerStudents(address _address, string memory _name, string memory _erp) public onlyTeacher {
        students[_address] = Student(_name, _erp, 0, false, Status.Student);
    }

    // to apply for cr election
    function applyForElection () public onlyStudents {
        studentsInElection.push(msg.sender);
        students[msg.sender].state = Status.StudentInElection;
        students[msg.sender].voted = true;
    }

    // vote a student
    function giveVote (address _address) public onlyStudents {
        require (students[_address].state == Status.StudentInElection, "The student in not in election");
        students[_address].votes += 1;
        students[msg.sender].voted = true;
    }

    // declare result
    function declareResult () public view onlyTeacher returns (address) {
        address winner = studentsInElection[0];
        for(uint8 i = 1; i < studentsInElection.length; i++) {
            if(students[studentsInElection[i-1]].votes < students[studentsInElection[i]].votes) {
                winner = studentsInElection[i];
            }
        }
        return winner;
    }
}
