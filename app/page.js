import { Form } from "@/app/_components/form";

const page = () => {
  return (
    <section className="w-screen min-h-screen md:h-screen  flex items-center justify-center bg-white">
      <div className="w-full h-full flex items-center max-w-screen-2xl mx-auto justify-center p-4">
        <Form/>
      </div>
    </section>
  );
};

export default page;
