
"use client"
import Display from '@/components/Display'
import Button from '@/components/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

<h1>Calculadora</h1> 
      
      <div className='space-y-1 p-2 w-64 bg-green-500 rounded full'>

      <Display/>

      <div className="flex flex row space-x-1"> 

<Button numero={7}/>
<Button numero={8}/>
<Button numero={9}/>
<Button numero={"AC"}/>

</div>

<div className="flex flex row space-x-1"> 

<Button numero={4}/>
<Button numero={5}/>
<Button numero={6}/>
<Button numero={"-"}/>

</div>
<div className="flex flex-row space-x-1">
           <Button numero={1}/>
           <Button numero={2}/>
           <Button numero={3}/>
           <Button numero={"+"}/>
         </div>
         <div className="flex flex-row justify-center space-x-1">
           <Button/>
         </div>

      </div>


     
      
        
          
          
    </main>
  )
}
