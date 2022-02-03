import { Button, Modal } from "react-bootstrap";
interface ModalUsersProps {
  show: boolean;
  onHide: () => void;
}

const ModalUser = ({ show, onHide }: ModalUsersProps) => {

  

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <h2>Teste modal</h2>
        <Button variant="secondary" type="button" onClick={onHide}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export default ModalUser;
