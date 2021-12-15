import React, { Component } from 'react';
import Web3 from 'web3';
import { Contract_Abi, Contract_Address, Student_Length } from './config.js';
import {Container, Row, Col, ListGroup, Button, Form} from 'react-bootstrap';
import './App.css';

class App extends Component {
    componentDidMount() {
      this.loadBlockchainData();
    }

    async loadBlockchainData() {
      const web3 = new Web3(Web3.givenProvider); // Web3.givenProvider || 'HTTP://127.0.0.1:7545'
      const accounts = await web3.eth.getAccounts();
      // console.log(accounts);
      const yourAccount = accounts[0];
      const contractInstance = new web3.eth.Contract(Contract_Abi, Contract_Address);
      // get the teacher of the contract
      const teacher = await contractInstance.methods.teacher().call();
      // get the students in election count
      const studentsInElectionCount = await contractInstance.methods.studentsInElectionCount().call();
      // console.log(studentsInElectionCount);
      //get students in election
      // const studentsInElectionArrayLength = await contractInstance.methods.getLengthOfStudentsInElection().call();
      this.setState({
        yourAccount,
        accounts,
        contractInstance,
        teacher,
        // studentsInElectionArrayLength,
        contractAddress: Contract_Address
      });

      // name the students in election
      // for(let i=0; i < studentsInElectionArrayLength; i++) {
      //   const studentAddress = await contractInstance.methods.studentsInElection(i).call();
      //   const student = await contractInstance.methods.students(studentAddress).call();
      //   const stringifyStudent = JSON.stringify(student);
      //   this.setState({
      //     studentsInElection: [...this.state.studentsInElection, stringifyStudent]
      //   });
      // }
      
      // register a student
      // await contractInstance.methods.registerStudent('0x23b9281a77C736C97ac7C1D5BAFc168886a686b0').send({
      //   from: this.state.teacher
      // });
    

      // check student
      // const gotStudent = await contractInstance.methods.students('0xf90dBA9a294e8DadB33BE1e22Dd007feB8850027').call();
      // console.log(gotStudent);

      // register all students
      // for(let i = 1; i <= Student_Length; i++) {
      //   await contractInstance.methods.registerStudent(accounts[i]).send({
      //       from: this.state.teacher
      //     });
      //     console.log('registered ', i);
      // }
      // this.registerAllStudents();

      //apply for election
      // this.applyForElection('siddhant angore', '1032547789');

      // get the student data array
      // console.log(Student_Data_Array[6][3]);

      // get name and erp
      // this.getTheNameAndErp("0x23b9281a77C736C97ac7C1D5BAFc168886a686b0");

      // get details of students in election 
      // for(let i = 1; i <= this.state.studentsInElectionCount; i++) {
      //   const student = await contractInstance.methods.studentsInElectionMapping(i).call();
      //   console.log(student);
      // }

      for(let i = 1; i <= studentsInElectionCount; i++) {
        const student = await contractInstance.methods.studentsInElectionMapping(i).call();
        const stringifyStudent = JSON.stringify(student);
        this.setState({
          studentsInElectionArray: [...this.state.studentsInElectionArray, stringifyStudent]
        });
        // console.log(student);
      }

      // give vote 
      // this.giveVote(1);
      // this.giveVote(1`);

      //declare winner
      // const t = await contractInstance.methods.declareWinner().call({from: teacher});
      // console.log(t);
      // this.declareWinner();
    }    

    constructor(props) {
      super(props);
      this.state = {
        studentsInElectionCount: 0,
        yourAccount: null,
        accounts: null,
        contractInstance: null,
        teacher: null,
        declared: false,
        studentsInElectionArray: [],
        contractAddress: null,
        winner: null
      };
    }

    registerAllStudents() {
      for(let i = 1; i <= Student_Length; i++) {
        this.state.contractInstance.methods.registerStudent(this.state.accounts[i]).send({
            from: this.state.yourAccount
          });
          console.log('registered ', i);
      }
    }

    // getTheNameAndErp(address) {
    //   for (let i = 0; i < Student_Data_Array.length; i++) {
    //     console.log(address === Student_Data_Array[0][4]);
    //   }
    // }

    applyForElection(name, erp) {
      this.state.contractInstance.methods.applyForElection(name, erp).send({
        from: this.state.yourAccount
      }).then((receipt) => {
        console.log(receipt);
      });
    }

    giveVote(id) {
      this.state.contractInstance.methods.giveVote(id).send({
        from: this.state.yourAccount
      }).then((receipt) => {
        console.log(receipt);
      })
    }

    declareWinner () {
      this.state.contractInstance.methods.declareWinner().call({
        from: this.state.yourAccount
      }).then((winner) => {
        this.setState({
          winner, 
          declared: true
        });
      });
    }

    render() {
        return ( 
          <Container>
            <h1 className='display-1'>CR Voting Live</h1>            
            <Row>
              <Col>
                <p className='lead'><strong>Students in Election</strong></p>
                <ListGroup variant='flush'>              
                {this.state.studentsInElectionArray.map(function (student) {       
                  let studentObject = JSON.parse(student);    
                    return (
                      <ListGroup.Item className='lead' variant='primary' key={studentObject.id}>{studentObject.name}</ListGroup.Item>
                    );                                                                                                                                
                  }                  
                )}        
              </ListGroup>
              </Col>
              <Col>
                <p className='lead'><strong>Live Votes</strong></p>
                <ListGroup variant='flush'>              
                {this.state.studentsInElectionArray.map(function (student) {       
                  let studentObject = JSON.parse(student);    
                    return (
                      <ListGroup.Item className='lead' variant='primary' key={studentObject.id}>{studentObject.votes}</ListGroup.Item>
                    );                                                                                                                                
                  }                  
                )}        
              </ListGroup>
              </Col>
              <Col md='auto'>
                {this.state.declared ? <p className='lead'><strong>Winner of Election: <small className="display-6 text-muted">{this.state.winner} </small></strong></p> : <p className='lead'><strong>Winner of Election: Not yet Declared</strong></p>}                
                <p className='lead'><strong>Information</strong></p>
                <p className='lead'>Your Account: {this.state.yourAccount}</p>
                <p className='lead'>Teacher: {this.state.teacher}</p>
                <p className='lead'>Contract Address: {this.state.contractAddress}</p>

                <Row>
                  <Col>
                    <p className='lead'>Function for Teachers:</p>
                  </Col>
                  <Col>
                  <Form onSubmit={(event) => {
                      event.preventDefault();
                      this.registerAllStudents();
                  }}>
                    <Button as="input" type="submit" value="Register All Students" />{' '}
                  </Form>
                  </Col>
                  <Col>
                    <Form onSubmit={(event) => {
                        event.preventDefault();
                        this.declareWinner();
                    }}>
                      <Button as="input" type="submit" value="Declare Winner" />{' '}
                    </Form>
                  </Col>
                </Row>                                      
                <Form onSubmit={(event) => {
                    event.preventDefault();
                    this.applyForElection(this.nameValue.value, this.erpValue.value);
                  }} >
                  <p className='lead text-center' >Stand For Election by Entering your Details for Students</p>
                  <Row className='align-items-center'>
                    <Col >
                      <Form.Control type="text" placeholder="Your Name" ref={(input) => {                          
                        this.nameValue = input;
                      }} required /> 
                    </Col>
                    <Col >
                      <Form.Control type="text" placeholder="Your ERP Number" ref={(input) => {                          
                        this.erpValue = input;
                      }} required />    
                    </Col>
                    <Col xs='auto'>
                      <Button variant="primary" type="submit">
                        Stand
                      </Button>
                    </Col>
                  </Row>              
                </Form>

                <p className='lead text-center'>Or</p>

                <p className='lead text-center'>Give vote to Other Students</p>
                {/* <Form onSubmit={(event) => {
                      event.preventDefault();
                      this.giveVote(this.idValue.value);
                  }}>
                    <Row>
                      <Col>
                      <Form.Control type="number" placeholder="The ID Number" min={1} max={this.state.studentsInElectionCount} ref={(input) => {                          
                          this.idValue = input;
                        }} required />                      
                      </Col>
                      <Col xs='auto'>
                        <Button as="input" type="submit" value="Delegate your Vote" />{' '}
                      </Col>
                    </Row>                    
                  </Form> */}
                <Form onSubmit={(event) => {
                      event.preventDefault();
                      this.giveVote(this.idValue.value);
                    }}>
                      <p className='lead'>Give vote to Other Students</p> 
                      <Row>
                        <Col>
                          <Form.Group className='mb-3' controlId="createNewTodo">                    
                            <Form.Control type="number" placeholder="Enter the ID of Candidate" ref={(input) => {                          
                              this.idValue = input;
                            }} required />
                          </Form.Group>
                        </Col>
                          <Col xs='auto'>
                            <Button variant="primary" type="submit">
                              Delegate your Vote
                            </Button>
                          </Col>
                      </Row>                   
                      
                    </Form>

              </Col>                
            </Row>
            <p className='lead'>...</p>
          </Container>
        );
    }
}

export default App;