export default function FeaturesBox({icon , title , desc}){
    return (
        <div className="w-[300px] mt-[50px]">
            <img className="my-[30px]" src={icon}/>
            <h2 className="text-2xl font-medium  mb-3" >{title}</h2>
            <p>{desc}</p>
        </div>
    )
}