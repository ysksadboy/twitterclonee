import Image from "next/image";
import { VscAccount } from "react-icons/vsc";

type PofileImageProps = {
    src?: string | null
    className?: string
}

export function ProfileImage({ src, className = "" }:
    PofileImageProps) {
    return (
        <div
            className={`relative h-12 w-12 overflow-hidden rounded-full
            ${className}`}
        >
            {src == null ? (
                <VscAccount className="h-full w-full" />
            ) : (
                <Image src={src} alt="profile Image" quality={100} fill />

            )}
        </div>
    );
}
