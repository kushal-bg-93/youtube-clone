import React,{useState,useEffect} from 'react'

const Test = () => {
    useEffect(()=>{
        replaceWithBr();
    },[])
    let [css,setCss]=useState("h-[45px] overflow-hidden")
    const [text,setText]=useState()
    const [more,setMore]=useState("...more")

    let test="Watch the Power-packed Official Telugu Showcase of Thalaivar's \"JAILER \". \nStarring Superstar Rajinikanth, Directed by Nelson & Music by Anirudh.\n\n#JaileShowcaseTelugu #SuperstarRajinikanth #SunPictures #Jailer #Nelson #Anirudh #JailerShowcase #thalaivarrajinikanth #Rajinikanth #Sunil\n----------------------------------------------------------------------------------\nMovie Credits:\nStar Cast: Rajnikanth, Mohan Lal, Jackie Shroff, Shiva Rajkumar, Sunil, Ramya Krishnan, Vinayakan, Mirna Menon, Tamannah, Vasanth Ravi, Naga Babu, Yogi Babu, Jaffer Sadiq, Kishore, Billy Muralee, Sugunthan, Karate Karthi, Mithun, Arshad, Marimuthu, Rithvik, Saravanan, Aranthaangi Nisha, Mahanadi Shankar & others.\n\nProduced by Sun Pictures\nWritten And Directed By Nelson\nAn Anirudh Musical\nDOP: Vijay Kartik Kannan\nEditor: R.Nirmal\nArt: Drk Kiran\nAction: Stun Siva\nCostume Designers: Pallavi Singh, Muthul Hafeez\nSound Mix: Suren.G\nSound Design: Suren.G - S.Alagiakoothan\nColorist: Andreas Brueckl\nDI Lab: Prime Focus Ltd\nVFX: Supervisor Ajay\nMakeup: C.Harinath\nStills: V.Sittrarasu\nPublicity Design: Kabilan Chelliah\nPRO: Riaz K.Ahmed\nProduction Controller: D Ramesh Kuchirayar\nExecutive Producer: Raja Sridhar"

    function replaceWithBr(){
        setText(test.replace(/\n/g, "<br />")) 
    }

    function setHeight(){
        (css=="h-[45px] overflow-hidden")?setCss("h-fit"):setCss("h-[45px] overflow-hidden")
        setMoreText();
    }

    function setMoreText(){
        (more=="...more")?setMore("show less"):setMore("...more")
    }


  return (
  <>
    <div className='ml-[300px] flex flex-col items-start bg-gray-100 p-4 rounded-xl'>

    <div className={css}>
         <div dangerouslySetInnerHTML={{__html: text}}/>
         </div>
         <button className='' onClick={()=>{setHeight()}}>{more}</button>
    </div>
    </>
  )
}

export default Test