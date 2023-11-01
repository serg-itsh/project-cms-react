import Container from "../components/common/Conteiner";
import tabsData from '../tabs.json';
 


const tabs = tabsData
 
  
  const DummyChart = () => {

 
    return (
      <section className="bg-white  text-center text-xl font-semibold min-h-[calc(100vh-200px)] w-full py-10">
      <Container>
        <h1 className="text-[32px] font-bold">{tabs[1].title}</h1>
        <table className="mt-10 mx-auto w-full lg:w-[500px] border-2 border-slate-500 ">
          <tbody className=" ">
            <tr className="bg-slate-200 ">
              <td className="p-4 bg-slate-200">Dummy</td>
              <td className="p-4">Chart</td>
            </tr>
            <tr className="border-t border-t-slate-700">
              <td className="p-4 ">---</td>
              <td className="p-4  ">---</td>
            </tr>
            <tr className="border-t border-t-slate-400 bg-slate-100">
              <td className="p-4 ">---</td>
              <td className="p-4  ">---</td>
            </tr>
            <tr className="border-t border-t-slate-400 ">
              <td className="p-4 ">---</td>
              <td className="p-4  ">---</td>
            </tr>
            <tr className="border-t border-t-slate-400 bg-slate-100">
              <td className="p-4 ">---</td>
              <td className="p-4  ">---</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </section>
    );
  };
  
  export default DummyChart;