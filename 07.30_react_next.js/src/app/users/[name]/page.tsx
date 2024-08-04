export default function UserDetailPage({ params }: { params: { name: string }}) {
    // name ini sesuaikan nama folder nya [name]
    // { params } merupakan parameter ini untuk menangkap [name] yg DYNAMIC
    // { params }: { params } itu merupakan tipe data dari { params } berupa OBJ
    // { params }: { params:{name: string} } itu merupakan tipe dari params berupa nama yg merupakan string

    return (
        <div>
            {/* params.name ini menyesuaikan folder nya [name] */}
            <h1>Detail User: {params.name}</h1>
        </div>
    )
}