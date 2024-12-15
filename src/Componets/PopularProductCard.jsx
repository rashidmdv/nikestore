import { star } from "../assets/icons"

function PopularProductCard({imgURL,name,price}) {
  return (
    <div className="flex items-center flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px] object-contain" />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="" width={20} height={20} />
            <p className="font-montserrat text-md leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-2 text-lg leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-md leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard