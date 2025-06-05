import {Button} from "@/components/ui/button";



export default function Hero () {
    return (
        <section className="flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32">
            <h1 className="text-4x1 font-bold tracking-tight sm:text-5xl md:text-6xl">
                Estudia con nosotros <br/>
                Y se un desarrollador {" "} 
                <span className="bg-gradient bg-gradient-to-r from-[#ff0080] to-[#7928CA] bg-clip-text text-transparent ">
                    Full Stack
                </span> 
                <br></br>
                <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
                Sumergete en el mundo de desarrollo de software, convierte el los que cambian el mundo
                </p> 
                <div className="flex flex-col justify-center pt-5 gap-4 sm:flex-row">
                    <Button 
                        variant="default"
                        className="bg-gradient-to-r from-[#ff0080] to-[#7928CA] text-white">
                            Comenzar
                        </Button>
                        
                </div>
            </h1>  
        </section>
    )
}