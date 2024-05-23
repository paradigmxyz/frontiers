import Image from 'next/image'

export function PerspectiveBackground() {
  return (
    <div className="absolute flex justify-center left-0 right-0">
      <div className="absolute top-0 bg-gradient-to-b from-black h-40 w-full" />
      <Image
        className="object-cover h-[1484px]"
        alt="Star Wars-style perspective transform shape in the background"
        src="/images/perspective.svg"
        width="1319"
        height="1484"
      />
      <div className="absolute bg-gradient-to-t h-80 bottom-0 from-black via-black w-full" />
    </div>
  )
}
