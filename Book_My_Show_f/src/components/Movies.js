import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Movies() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Use an immediately-invoked async function to fetch data since useEffect can't be async.
    (async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie?api_key=c63b3966683c21ab83b395dcfa6b7a9c'
        );
        console.log(response.data);
        setData(response.data.results); // Assuming you want to use the 'results' array from the response.
      } catch (error) {
        console.error(error);
      }
    })();
  }, []); // Pass an empty dependency array to run this effect only once.

  const navigateToBooking = (movieTitle) => {
    navigate(`/booking/${encodeURIComponent(movieTitle)}`)
  }

    return (
      <div>
        <Container fluid style={{ padding: '5%' }}>
          <Row style={{ textAlign: 'center' }}>
            {data.map((mov) => (
              <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{ marginBottom: '7%' }}>
                <Card as="a" style={{ cursor: 'pointer' }} onClick={() => navigateToBooking(mov.title)} >
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} /> {/* Use the correct property for the image URL */}
                  <Card.Body>
                    <Card.Text>
                      <b>{mov.title}</b>
                    </Card.Text> 
                  </Card.Body>

                </Card> 
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );


}

export default Movies;
