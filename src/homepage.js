import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './navbar';
import React,{useState, useEffect} from 'react';
import Pagination from './pagination';



function Homepage(){
  const [names, setNames] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    fetch('http://localhost:9292/baby_names')
    .then((res) =>res.json())
    .then((data) =>setNames(data))
  },[])

  // Get the current page
const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentNames = names.slice(indexOfFirstPost, indexOfLastPost)

const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

    return (
      <Container className="homepage">
            <Row>
                <Col xs lg="10">
                  <h2>Gone</h2>
                    <ul>
                      {currentNames.map((name) =>(
                        <li key={name.id}>
                            <p>{name.name}</p>
                        </li>
                      ))}
                    </ul>
                    <Pagination postsPerPage={postsPerPage} totalPosts={names.length} paginate={paginate}/>
                </Col>
                <Col>
                  half done
                </Col>
            </Row>
      </Container>
    )
}

export default Homepage;