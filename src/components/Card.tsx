import { ReactNode } from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
    children?: ReactNode
}

export default function BasicCard(props:Props) {
  return (
    <Card>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
}
