"use client";
import React from "react";
import styled from "styled-components"
import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";

    function Sidebar(){
        const {theme} = useGlobalState();
        const pathname

        return(
            <SidebarStyled theme={theme}>
                <div className="profile">
                    <div className="profile-overlay">
                      <Image width={70} height={70} src="/girlimg1.jpg" alt="profile"/>
                    </div>
                    <h1>
                        <span>Sin</span>
                        <span>Rostro</span>
                    </h1>

                </div>
                <ul className="nav-items">
                    {menu.map((item)=>{
                        return(
                            <li>
                                
                            </li>
                        )
                    }
                    

                </ul>

            </SidebarStyled>
        );

    }
    
      export default Sidebar;       
            
        
      



        
        
   


   
    
    
    
              
    



   
    
       
       
        


                
 
        
        
       
                
                
              
            
          
      
          
  
   
    
     
   
       

 

   
    
           