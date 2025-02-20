import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import { ProfileContext } from "../Context/ProfileContext";
import { useContext } from "react";
import Modal from "./Modal"
import Img from "../../public/img.jpg"
export default function CardComponnets() {

  const {user} = useContext(ProfileContext)
  return (
    <Card className="pt-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start  ">
      <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={Img}
          width={270}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2  mx-4">
      <p className="text-tiny uppercase font-bold">Name  : {user.Name}</p>
        <small className="text-tiny  font-bold">Stack : {user.Stack}</small>
        <h4 className="font-bold text-large">Specialize : {user.SpecialRole}</h4>
      </CardBody>
    </Card>
  );
}
