import React, {useState} from 'react'
import './App.css'
import 'rsuite/dist/styles/rsuite-dark.css'
import {
  Button, Container, Header, Navbar, Content, FlexboxGrid,
  Panel, Form, FormGroup, ControlLabel, FormControl, ButtonToolbar,
  Alert, Divider
} from 'rsuite'
import { connect } from 'react-redux';
import { addTodo, ToDo } from './redux';
import {generate} from 'shortid'
import Todos from './components/Todos'

const App = ({  dispatch }) => {
 
  const [state, setState] = useState({txt: ''})
  const createTodo = () => {
    dispatch(addTodo(new ToDo(generate(), state.txt)))
    Alert.success(`You have added --->:  ${state.txt}`)
    setState({txt: ' '})
  }
  const updateTxt = (txt) =>{
    setState({txt})
  }
  return (
    <div className="main">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Header>
              <p className="navbar-brand">Redux-React Todo</p>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Add Todo</h3>} bordered>
                <Form fluid>
                  <FormGroup>
                    <ControlLabel>what you want to do?</ControlLabel>
                    <FormControl required name="task" value={state.txt} onChange={updateTxt}></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button onClick={createTodo} appearance="primary">
                        Create
                      </Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
              </Panel>
              <Divider/>
              <Todos/>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
}

export default connect()(App);
