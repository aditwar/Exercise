// ini karena didalam folder users maka dapat diakses (ROUTER) dalam folder dengan alamat "/users"
import Link from "next/link";

// FUNCTION untuk FETCHING DATA dri SERVER


export default function UsersPage() {

    // data ini tidak perlu pakai type nya (data: string[]) krn secara default sudah ada
    const data = ["Andi", "Budi", "Caca", "Dudi"]
    return (
        <div className="flex w-full flex-col items-center">
            {
                // ini hanya dimapping [] per item
                data.map ((item) => {
                    return (

                        // agar tidak ERROR diberi key={} dibuat secara unique
                        // ${item} agar menunjuk pada item di ARRAY sesuai namanya
                        <Link href={`/users/${item}`} key={item}>{item}</Link>
                    )
                })
            }
        </div>
    )
}