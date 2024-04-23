export default function Liste({ techno, deleteList }) {
  return (
    <li>
      {techno.nom}
      <button
        onClick={() => {
          return deleteList(techno.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
