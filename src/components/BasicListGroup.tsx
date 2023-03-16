import ListGroup from 'react-bootstrap/ListGroup';

interface Props {
  options: string[]
}

export default function BasicListGroup({ options }: Props) {
  if (!options) {
    return <p>No Results</p>
  }
  return (
    <ListGroup>
      <>
        {options.map((option, i) => {
          <ListGroup.Item key={i}>{option}</ListGroup.Item>

        })}
      </>
    </ListGroup>
  );
}