import React, {Fragment} from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom';

function Home(){

    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);
    }

    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);

        history('/');
        
    }

    return(
        <>
        <div style={{alignitems:"center"}}>
            <h1>CRUD Application : </h1>
            <img src="edu1.jpg" className='image'></img>
        </div>
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            <Link to={'/edit'} > 
                                            <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Data Available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className='d-grid gap2' to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
        </>
    )
} 

export default Home;