
export default function Form({ newtechno, setNewtechno, addTechno }) {
  return (
    <div>
      <button onClick={addTechno}>Add</button>
      <input value={newtechno} onChange={(e)=> setNewtechno(e.target.value)} type="text" />
    </div>
  );
}
