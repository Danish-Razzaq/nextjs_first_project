import { link } from "fs"
import Link from "next/link"

export default function dashboard() {
    return (

        <div>
            <div >Dashboard</div>
            <div className="flex gap-17 py-8 px-8">

                <ul>
                    <li> <Link href="dashboard/analytics"> Analytics </Link></li>
                    <li><Link href="dashboard/sitting">Sitting </Link></li>
                </ul>



            </div>

        </div>
    )
}