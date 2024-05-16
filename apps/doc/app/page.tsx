import Image from "next/image";
import {Button} from "@simao234430/button"

 
export default function Home() {
  return (

     <main className="container mx-auto max-w-7xl px-6 flex-grow">
     <section className="flex flex-col items-center justify-center">
     <div className="flex gap-4 items-center">
      <Button size="sm">
        Small
      </Button>  
      <Button size="md">
        Medium
      </Button>  
      <Button size="lg">
        Large
      </Button>  
      <Button color="primary" isLoading>
      Loading
    </Button>
    </div>
     </section>
   </main>
       
  );
}
