
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ModalCustomInterface{
    show: boolean,
    title: string,
    children: React.ReactNode,
    onHide: () => void
}
export default function ModalCustom({show, title, children, onHide}: ModalCustomInterface) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show = {show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}