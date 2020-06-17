import React, { Component } from 'react';

//import Material Table:
import MaterialTable from 'material-table';
import { AddBox, ArrowDownward } from "@material-ui/icons";

import './todos.css';
import HeaderComponent from './outline-components/HeaderComponent.js';


class ListTodosComponent extends Component {


    constructor(props){
        super(props);

        this.state = {
            todos: [
                {id: 1,description: 'Learn React',done:false,targetDate: (new Date()).toLocaleDateString()},
                {id: 2,description: 'Learn Spring Boot with React',done:false,targetDate: (new Date()).toLocaleDateString()},
                {id: 3,description: 'Learn Docker',done:false,targetDate: (new Date()).toLocaleDateString()},
                {id: 4,description: 'Learn Spring Cloud',done:false,targetDate: (new Date()).toLocaleDateString()},
                {id: 5,description: 'Get Certification',done:false,targetDate: (new Date()).toLocaleDateString()},
                {id: 6,description: 'Complete React Course',done:false,targetDate: (new Date()).toLocaleDateString()},
                {id: 7,description: 'Spring Boot Security Revisited',done:false,targetDate: (new Date()).toLocaleDateString()},
                {id: 8,description: 'Finish the startup book',done:false,targetDate: (new Date()).toLocaleDateString()},
                {id: 9,description: 'stay positive',done:false,targetDate: (new Date()).toLocaleDateString()}
                ] 
        }
    }

    render() {

        const todosLocal = this.state.todos;
        const todosList = this.state.todos.map( (todo,index) =>{
           
            return <tr>                        
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.targetDate}</td>
                    </tr>
        })

        return (
            <div>
                <div className='component-front'>
                    <HeaderComponent/>
                </div>
                
                <div className='component-back'>
                <h1>list Todos</h1>

{/**<table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>Is Completed</th>
                            <th>target date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todosList}
                    </tbody>
                </table>

                <hr></hr> */}
                
                <MaterialTable title="Multiple Actions Preview"
                    columns={[
                        { title: 'User Id', field: 'id' },
                        { title: 'Description', field: 'description' },
                        { title: 'Is Completed', field: 'done'},
                        { title: 'Target Date', field: 'targetDate'
                        },
                    ]}
                    data={todosLocal}      
                    actions={[
                        {
                        icon: 'delete',
                        tooltip: 'delete user',
                        onClick: (event, rowData) => {
                            console.log('rowData:',rowData)
                        }
                        }
                    ]}
                    />
                </div>
                
            </div>
        );
    }
}

export default ListTodosComponent;