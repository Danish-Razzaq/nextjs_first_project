import Link from "next/link";

const Setting = () => {
    return (

        <div>
            <div>Settings</div>
            <div className="flex gap-18 px-8 py-6" >
                <ul>
                    <li><Link href="dashboard/sitting/pin">Password</Link></li>
                    <li><Link href="dashboard/sitting/profi">Profile</Link></li>
                </ul>

            </div>

        </div>
    )
};

export default Setting;
