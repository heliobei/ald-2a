'use client' // app/components/Acc.jsx
import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function Acc() {
  

  return (
    <div className=' md:py-2 md:p-0 dark:bg-slate-700 '>
        <div className='text-center max-w-5xl mx-auto md:py-8'>
            <h1 className="text-4xl font-bold px-8 text-slate-800 dark:text-white">Usando a Plataforma</h1>
            <p className="mt-4 text-lg px-8 text-slate-800 dark:text-white">
            Aprenda a usar nossa plataforma através dos conteúdos disponibilizados abaixo. Lembre-se que a plataforma possui ferramnentas específicas de acordo com cada perfil, sendo eles de estudante, educador ou gestor.
            </p>
        </div>

        <div className='max-w-5xl mx-auto'>
        <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Vídeo Tutorial" subtitle="Clique para abrir" title="Vídeo Tutorial" className="hover:bg-sky-100 transition-colors duration-200 rounded-lg px-4 font-bold dark:hover:bg-sky-700 py-4 my-4 bg-slate-200">
            <div className='flex justify-center items-center'>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/Hw0lZjIxELY" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    

                ></iframe>
            </div>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Caderno do Estudante" subtitle="Clique para abrir" title="Manual de Acesso à Plataforma" className="hover:bg-sky-100 transition-colors duration-200 rounded-lg px-4 font-bold dark:hover:bg-sky-700 py-4 my-4 bg-slate-200">
             <div className='flex justify-center items-center'>
                <iframe src="https://beieducacao.com.br/conteudo-aprendendo-a-lidar-com-dinheiro/assets/uploads/roteiro.pdf" width="100%" height="600" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>
                </div>
            </AccordionItem>
            
            
        </Accordion>
    </div>
    </div>
    
    
  );
}
