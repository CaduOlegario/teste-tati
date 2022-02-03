import { Button, Modal } from "react-bootstrap";
import Users from "../../models/users";
interface ModalUsersProps {
  show: boolean;
  onHide: () => void;
  dataUser: Users | undefined;
}

const ModalUser = ({ show, onHide, dataUser }: ModalUsersProps) => {

  console.log(dataUser)

  return (
      <Modal show={show} onHide={onHide}>
        <h2>Teste modal</h2>
        <Button variant="secondary" type="button" onClick={onHide}>
          Close
        </Button>
      </Modal>
  );
};

export default ModalUser;
