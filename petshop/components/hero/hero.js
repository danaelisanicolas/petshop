import Image from "next/image"
import styles from "../../styles/components/hero.module.scss"

export const Hero = () => {
  return (
    <div>
      <div className={"container vw-100 " + styles.hero}>
        <Image
          src="/assets/images/hero/dog.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}