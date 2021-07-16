import React from 'react'
import { FlexboxGrid, List, IconButton, Icon, Alert } from 'rsuite'
import { connect } from 'react-redux'
import { delTodo } from '../redux/todos'

const Todos = ({ todos, dispatch}) => {
    const del = (todo) =>{
        dispatch(delTodo(todo))
        Alert.error(`${todo.text} is deleted`)
    }
    return (
        <section>
            <List>
                {todos.map((todo, i) => {
                    return <List.Item index={i} key={i}>
                        <FlexboxGrid justify="space-around">
                            <FlexboxGrid.Item colspan={12}>
                                <h3>{todo.text}</h3>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={10}>

                            </FlexboxGrid.Item>

                            <FlexboxGrid.Item colspan={2}>
                                <IconButton
                                icon={<Icon name="minus"/>}
                                color="red" circle onClick={()=>del(todo)} />
                            </FlexboxGrid.Item>

                        </FlexboxGrid>
                    </List.Item>
                })}
            </List>
        </section>
    )
}

export default connect(({ todos }) => ({ todos }))(Todos)
