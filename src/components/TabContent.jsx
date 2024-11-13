export default function TabContent(props) {
  const { title, description, code } = props;
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </>
  );
}
