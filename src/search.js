import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function Search(props){
    const [search, setSearchVal] = useState('')

    const handleInput = (e) =>{
        setSearchVal(e.target.value)
    }

    const handleClearBtn = () =>{
        setSearchVal('')
    }

    const filteredProducts = props.name.filter((name)=>{
           console.log(name)
    })

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Control type='search' placeholder='Search....'/>
                </Form.Group>
                <Button variant='outline-primary'>
                    Search
                </Button>
            </Form>            
        </>
    )

}
export default Search
