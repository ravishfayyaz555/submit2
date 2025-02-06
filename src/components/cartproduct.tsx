import { useAppDispatch } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";
import { removefromCart } from "@/redux/featurs/cartSlice";
import Image from "next/image";

interface PropsType {
  id: number;
  img: string;
  name: string;
  price: string;
  quantity: number;
}

const Cartproduct: React.FC<PropsType> = ({ id, img, name, price, quantity }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Replace <img> with Next.js <Image> for optimization */}
        <div className="relative w-[80px] h-[80px]">
          <Image
            src={img}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} x ${price}.00
          </p>
        </div>
      </div>

      <RxCross1
        className="cursor-pointer"
        onClick={() => dispatch(removefromCart(id))}
      />
    </div>
  );
};

export default Cartproduct;
