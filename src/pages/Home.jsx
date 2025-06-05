import React, { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";
import { getAllMemes } from "../Api/memes";
import { Col, Row } from "react-bootstrap";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
    console.log(data);
  }, []);
  return (
    <Row>
        {data.map((el) => (
          <Col>
            <MemeCard img={el.url} title={el.name} />
          </Col>
        ))}
    </Row>
  );
}

export default Home;
