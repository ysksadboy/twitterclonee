import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { IconHoverEffect } from "./IconHoverEffect";
import { VscAccount, VscHome, VscSignIn, VscSignOut } from "react-icons/vsc";

export function SideNav() {
    const session = useSession()
    const user = session.data?.user

    return (

        <nav className="sticky top-0 px-2 py-4">
            <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
                <li className="flex items-center">
                    <Link href="/">
                        <IconHoverEffect>
                            <span className="flex items-center gap-4">
                                <VscHome className="h-8 w-8" />

                            </span>

                            <span className="hidden text-lg md:inline">
                                Home
                            </span>

                        </IconHoverEffect>
                    </Link>
                </li>
                {user != null && (
                    <li className="flex items-center">
                        <Link href={`/Profiles/${user.id}`}>
                            <IconHoverEffect>
                                <span className="flex items-center gap-4">
                                    <VscAccount className="h-8 w-8" />

                                </span>

                                <span className="hidden text-lg md:inline">
                                    Profile
                                </span>

                            </IconHoverEffect>

                        </Link>
                    </li>
                )}
                {user == null ? (
                    <li className="flex items-center">
                        <button onClick={() => void signIn()}>
                            <IconHoverEffect>
                                <span className="flex items-center gap-4">
                                    <VscSignIn className="h-8 w-8 fill-green-700" />

                                </span>

                                <span className="hidden text-lg md:inline
                               text-green-700 ">
                                    Log In
                                </span>

                            </IconHoverEffect>
                        </button>
                    </li>
                ) : <li className="flex items-center">
                    <button onClick={() => void signOut()}>
                        <IconHoverEffect>
                            <span className="flex items-center gap-4">
                                <VscSignOut className="h-8 w-8 fill-red-700" />

                            </span>

                            <span className="hidden text-lg md:inline
                               text-red-700 ">
                                Log Out
                            </span>

                        </IconHoverEffect>
                    </button>
                </li>}
            </ul>
        </nav >
    );
}