import NavLink from "@/components/NavLink";


const navlink= [
    {
        path: '/deshbord',
        title: 'Deshboard'
    },
    {
        path: '/deshbord/add-prodoct',
        title: 'Add Prodoct'
    },
    {
        path: '/deshbord/manage-product',
        title: 'Manage Product'
    },
    {
        path: '/deshbord/all-products',
        title: 'All Product'
    },
    {
        path: '/',
        title: 'Home'
    }
]

const Sidebar = () => {
    return (
        <aside className="mr-10">
            <h1 className="text-3xl font-semibold">Deshboard</h1>
            <ul>
            {
                navlink.map(({path, title})=>
                 (<li className="mx-2" key={path}>
                   <NavLink exact activeClassName="text-blue-500"
                    href={path}>{title}</NavLink>
                </li>))
            }
            </ul>
        </aside>
    );
};

export default Sidebar;