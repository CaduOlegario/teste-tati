import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import {
  Container,
  Form,
  Row,
  Col,
  Table,
  Button,
} from "react-bootstrap";
import moment from "moment";

interface TableProps {
  onOpenModal: () => void;

}

const TableUsers = ({onOpenModal}:TableProps) => {
  const data = useContext(DataContext);
  const [search, setSearch] = useState("");

  return (
    <Container className="mt-5" fluid="sm">
      <Form>
        <Row className="justify-content-center">
          <Col xs={7}>
            <Form.Control
              placeholder="Pesquisar"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            />
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover size="sm" className="mt-5">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Data de nascimento</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {data
            // eslint-disable-next-line array-callback-return
            .filter((itens) => {
              if (search === "") {
                return itens;
              } else if (
                itens.name.first.toLowerCase().includes(search.toLowerCase())
              ) {
                return itens;
              }
            })
            .map((item) => (
              <tr key={item.id.value} data-bs-target={`#id ${item.id.value}`}>
                <td>{item.name.first} {item.name.last}</td>
                <td>{item.gender}</td>
                <td>{moment(item.dob.date).format("DD/MM/YYYY")}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => onOpenModal()}
                  >
                    Detalhes
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableUsers;
