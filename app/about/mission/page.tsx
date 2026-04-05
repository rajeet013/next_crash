import Button from "@/app/components/button";
import picture from "@/public/picture.jpg";
import Image from "next/image";

export default function Mission() {
  return (
    <main className="mt-10">
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum modi
        soluta eius deleniti beatae provident impedit, asperiores possimus
        officiis facilis recusandae maiores qui repudiandae a nulla consequuntur
        quo quod nobis.
      </div>

      <div>
        <Image placeholder="blur" src={picture} alt="Swimming Pool Image" />
      </div>

      <Button />
    </main>
  );
}
