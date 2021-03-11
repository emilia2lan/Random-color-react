export default function BoxContainer(props) {
  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        backgroundColor: props.background,
        padding: '10px',
      }}
    >
      {props.text}
    </div>
  );
}
