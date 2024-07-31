import { Link } from 'react-router-dom';
// import {Logo} from "/components/logo"
import {
  
    Home,
  } from "lucide-react";
// ...

<Link to="/examples/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
  Overview
</Link>

import { cn } from "@/lib/utils"

export function Sidebar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="flex-1">
    <nav
      className={cn("grid items-start px-2 text-sm font-medium lg:px-4", className)}
      {...props}
    >
        {/* <Logo /> */}
        <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          to="/"
        >
        <Home className="h-4 w-4" />
          Visualiser les tendances
        </Link>
        
        <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          to="/Meteo "
        >
          <Home className="h-4 w-4" />
          Météo
        </Link>
        <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          to="/Les stations météorologiques"
        >
        <Home className="h-4 w-4" />
        Les stations météorologiques 
        </Link>
        <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          to="/Les stations météorologiques"
        >
        <Home className="h-4 w-4" />
        Les stations météorologiques 
        </Link>
        
      
    
    </nav>
    </div>
  )
}