"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; //HOOK PARA OBTENER LA RUTA
import { useState } from "react"; //HOOK PARA MANEJAR ESTADO
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { DarkModeToggle } from "./DarkModeToggle";
import { BookOpen, Code2, Laptop, Menu } from "lucide-react";
import { cn } from "@/lib/utils"; // Funcion para cambiar clases
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"; //Componente para el menu lateral
import { SearchInput } from "./Searcheinput";

//Elementos de navegacion con etiquetas rutas y icons

const navItems  = [
  {label: "Cursos", href: "/cursos", icon: BookOpen}, 
  {label: "Retos", href: "/retos", icon: Code2, badge: "Muy pronto"}, 
  {label: "Proyectos", href: "/proyectos", icon: Laptop}, 


]

export default function Header () {
  const pathname = usePathname (); // Obtener la ruta actual
  const [isOpen, setIsOpen] = useState(false); //Estado para el menu lateral
  return (
    <header className="sticky top-0, z-50, w-full, border-b, bg-background/95
    backdrop-blur">
      {/* CONTENEDOR PRINCIAPL*/}
      <div className="container flex h-16 items-center justify-between">
        {/* Logo y Navegaciòn */}
          <div className="flex items-center gap-2">
            {/* Logo */}
            <Link href = "/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full
              bg-primary text-primary-foreground">
                <Code2 className="h-5 w-5"/>
              </div>
              <span className="text-xl font-bold sm:block hidden">
                Academia Adso
              </span>
              <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs
              font-medium text-muted-foreground">
                BETA
              </span>
            </Link>
            {/* NAVEGACION */}
            <nav className="hidden md:flex md:gap-6">
              {navItems.map((item) => (
                <Link 
                key={item.label}
                href={item.href}
                className={cn(
                                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50",
                                pathname === item.href ? "text-foreground" // si la ruta actual es igual a la ruta del item resalta el texto  
                                : "text-foreground/60" //si no, usa un color mas claro 
                )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                  {item.badge && (
                    <span className="ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {item.badge}
                    </span>
                  )}                
                </Link>
              ))}
            </nav>
          </div>
          {/* control para el modo oscuro*/}
          <div className="flex items-center gap-4 ">
            {/*barra para busqueda*/}
              <SearchInput />
            <DarkModeToggle />
            {/*Boton para inciar sesiòn*/}
                <SignedIn>
                  <UserButton />
                </SignedIn>

                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="outline" className="hidden md:inline-flex">Iniciar sesion</Button>
                  </SignInButton>
                </SignedOut>

            {/*Navegaciòn movil*/}

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" className="md:hidden">
                      <Menu className="h-5 w-5" />
                        <span className="sr-only">Abrir menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px]">
                    <SheetTitle>Menu</SheetTitle>
                    <nav className="flex flex-col gap-4 p-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={cn(
                              "flex items-center gap-1.5 text-sm font-medium transition-colors hover:bg-muted/80",
                                pathname === item.href 
                                ? "text-foreground"
                                : "text-foreground/60"
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                    {/*Boton para inciar sesion mobil*/}
                        <SignedOut>
                            <SignInButton mode="modal">
                              <Button variant="outline">Iniciar sesion</Button>
                            </SignInButton>
                        </SignedOut>

                  </SheetContent>
                </Sheet>

          </div>
      </div>
    </header>
  )
}
