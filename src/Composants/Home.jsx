import Liste from "./Liste";
import { useState, useContext } from "react";
import Form from "./Form";
import { ThemeContexte } from "../contexte/useTheme";
import { NameContexte } from "../contexte/useName";

export default function Home() {
  const [vif, setvif] = useState(false);
  const [newtechno, setNewtechno] = useState("");
  const [techos, setTechno] = useState([
    { id: 1, nom: "VueJs" },
    { id: 2, nom: "ReactJs" },
    { id: 3, nom: "Angular" },
  ]);

  const {theme, changeTheme} = useContext(ThemeContexte)
  const {name, changeName} = useContext(NameContexte)




  function changeValue() {
    changeTheme()
    changeName();
    setvif(!vif);
  }

  function addTechno(e) {
    let newid = new Date().getTime;
    let newtechnoProvisoir = newtechno;
    let listProvisoir = techos;

    listProvisoir.push({
      id: newid,
      nom: newtechnoProvisoir,
    });

    setTechno(listProvisoir);
    setNewtechno("");
  }

  function deleteList(a) {
    let listCopie = techos;

    let listProvisoir = listCopie.filter((e) => {
      return e.id != a;
    });

    setTechno(listProvisoir);
  }

  return (
    <>
      <p> Hello word ! {name} {theme}</p>
      <button onClick={changeValue}> X </button>
      <ul>
        {techos.map((techno) => {
          return (
            <Liste techno={techno} deleteList={deleteList} key={techno.id} />
          );
        })}
      </ul>
      <Form
        newtechno={newtechno}
        setNewtechno={setNewtechno}
        addTechno={addTechno}
      />
      {vif && <p>This is the v-if !</p>}
    </>
  );
}
