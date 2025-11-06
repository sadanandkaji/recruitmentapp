import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import  {client} from "@repo/db/client";


export default async function  Home() {


  const user= await client.users.findFirst()
  return (
    <div className={styles.page}>
      <div> name is </div>
    { user?.username}
     
    </div>
  );
}
