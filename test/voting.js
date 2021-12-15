const CRVoting = artifacts.require("../contracts/CRVoting.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("CRVoting", function(accounts) {
    const teacher = accounts[0];
    // console.log(teacher);
    const students = accounts.slice(1, 77);

    // it("should assert true", async function() {
    //     await CRVoting.deployed();
    //     return assert.isTrue(true);
    // });

    // it("should be the teacher", async function() {
    //     const instance = await CRVoting.deployed();
    //     const t = await instance.teacher();
    //     return assert(t, teacher, "Not a teacher");
    // });

    // it("teacher should register a student", async function() {
    //     const instance = await CRVoting.deployed();
    //     console.log(students[0]);
    //     await instance.registerStudent(students[0], { from: teacher }).then((receipt) => {
    //         console.log(receipt);
    //     });
    //     // return true;
    // }
    // it("should check a student", async function() {
    //     const instance = await CRVoting.deployed();
    //     await instance.registerStudent(students[0], { from: teacher });
    //     await instance.students(students[0]).then((value) => {
    //         // console.log(value);
    //         assert(value == true, 'not found');
    //     });
    // });

    // it("student should apply for election", async function() {
    //     const instance = await CRVoting.deployed();
    //     // before registration
    //     await instance.students(students[0]).then((value) => {
    //         console.log('student before registered?', value);
    //     });
    //     // registration
    //     await instance.registerStudent(students[0], { from: teacher });
    //     // after registration
    //     await instance.students(students[0]).then((value) => {
    //         console.log('student after registered?', value);
    //     });
    //     let count = await instance.studentsInElectionCount();
    //     console.log(count.toNumber());
    //     // apply for election
    //     await instance.applyForElection('anurag mahajan', '1032456698', { from: students[0] });
    //     // after applying
    //     await instance.students(students[0]).then((value) => {
    //         console.log('student after applying?', value);
    //     });
    //     count = await instance.studentsInElectionCount();
    //     console.log(count.toNumber());
    //     // // again apply
    //     // await instance.applyForElection('anurag mahajan', '1032456698', { from: students[0] });
    //     // // check after again applying
    //     // await instance.students(students[0]).then((value) => {
    //     //     console.log('can student apply again?', value);
    //     // });

    // });

    // it("should check a if students is actully applied", async function() {
    //     const instance = await CRVoting.deployed();
    //     await instance.registerStudent(students[1], { from: teacher });
    //     let count = await instance.studentsInElectionCount();
    //     console.log(count.toNumber());
    //     await instance.applyForElection('anuarag mahajan', '1032564498', { from: students[1] });
    //     const student = await instance.studentsInElectionMapping(1);
    //     console.log(student.name);
    // });

    // it("shoudl be able to give vote", async function() {
    //     const instance = await CRVoting.deployed();

    //     await instance.registerStudent(students[0], { from: teacher });
    //     await instance.applyForElection('anuarag mahajan', '1032564498', { from: students[0] });
    //     let student = await instance.studentsInElectionMapping(1);
    //     console.log(student.name, student.votes.toNumber());

    //     await instance.registerStudent(students[1], { from: teacher });
    //     await instance.giveVote(1, { from: students[1] });
    //     student = await instance.studentsInElectionMapping(1);
    //     console.log(student.name, student.votes.toNumber());
    // });


    // it("shoudl be able to declare vote", async function() {
    //     const instance = await CRVoting.deployed();

    //     await instance.registerStudent(students[0], { from: teacher });
    //     await instance.applyForElection('anuarag mahajan', '1032564498', { from: students[0] });
    //     let student = await instance.studentsInElectionMapping(1);
    //     console.log(student.name, student.votes.toNumber());

    //     await instance.registerStudent(students[1], { from: teacher });
    //     await instance.applyForElection('basu mahadev', '1032371498', { from: students[1] });
    //     student = await instance.studentsInElectionMapping(2);
    //     console.log(student.name, student.votes.toNumber());

    //     await instance.registerStudent(students[2], { from: teacher });
    //     await instance.giveVote(1, { from: students[2] });

    //     await instance.registerStudent(students[3], { from: teacher });
    //     await instance.giveVote(1, { from: students[3] });
    //     student = await instance.studentsInElectionMapping(1);
    //     console.log(student.name, student.votes.toNumber());

    //     const name = await instance.declareWinner({ from: teacher });
    //     console.log(name);
    // });


});