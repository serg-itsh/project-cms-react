import Container from "../components/common/Conteiner";
import tabsData from "./tabs.json";

const tabs = tabsData;

const DummyTable = () => {
  return (
    <section className="bg-white  text-center text-xl font-semibold h-[calc(100vh-200px)] w-full py-10">
      <Container>
        <h1>{tabs[0].title}</h1>
        <table className="w-[500px]">
          <tbody className="border-2 border-slate-700 ">
            <tr className="bg-slate-200 ">
              <td className="p-4 bg-slate-200">Dummy</td>
              <td className="p-4">Table</td>
            </tr>
            <tr>
              <td className="p-4 "></td>
              <td className="p-4  "></td>
            </tr>
          </tbody>
        </table>
      </Container>
    </section>
  );
};

export default DummyTable;
