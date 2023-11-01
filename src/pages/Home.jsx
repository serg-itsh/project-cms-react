import Container from "../components/common/Conteiner";
 
 const Home = () => {
    return (
      <section className=" py-10 min-h-[calc(100vh-200px)]">
        <Container >
        <h1 className="text-[32px] font-bold">Welcome</h1>
       
        <div className="pt-5 lg:flex gap-10 ">
        <p className="indent-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis nam, minus ea natus eum vero voluptates obcaecati dolorum vitae neque. Similique quibusdam voluptas optio ratione deserunt aspernatur molestiae adipisci.
        </p>
        
        <img className="mt-5 w-full lg:w-[50%] rounded-[10px]" src="https://backendless.com/wp-content/uploads/2022/07/Custom-Components-in-UI-Builder-from-Backendless.png" alt="Custom UI Components in Backendless " />
        
        </div>
        </Container>
      </section>
    );
  };

  export default Home;