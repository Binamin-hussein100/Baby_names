import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap';

function Search(props){
    const [search, setSearchVal] = useState('')


    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Control 
                    type='search' 
                    placeholder='Search....'
                    onChange={handleInput}
                    value={search}
                    />
                </Form.Group>
                <Button variant='outline-primary'>
                    Search
                </Button>
            </Form>  
            <div>
                <h1>Binamin</h1>
                <ul>
                    {filteredProducts.map(product=>{
                        return <li key={product}>{product}kk</li>
                    })}
                </ul>
            </div>          
        </>
    )

}
export default Search
