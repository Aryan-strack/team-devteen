import Image from "next/image"
import SaasImg from "../assets/sass.png"

export const SaasIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
  return (
    <Image
      src={SaasImg}
      alt="SaaS"
      width={20}
      height={20}
      className={className}
      style={style}
    />
  )
}
