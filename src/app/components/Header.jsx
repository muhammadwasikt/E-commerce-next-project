'use client'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { CgProfile } from "react-icons/cg"
import { CiSearch } from "react-icons/ci"
import { HiBars3 } from "react-icons/hi2"
import { MdAddShoppingCart } from "react-icons/md"
import { PiSignInThin } from "react-icons/pi"

const Header = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => { console.log(data) }
    return (
        <div className="justify-between sticky top-0 z-10 border navbar bg-base-100">
            <div>
                <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="btn btn-circle swap swap-rotate hidden max-lg:inline-flex">
                        <HiBars3 className="text-3xl" />
                    </label>
                </div>
                <div className="drawer-side mt-[72px]">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4 leading-7">
                        <label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => router.push('/home')}>Home</label>
                        <label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => router.push('/products')}>Products</label>
                        <label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => router.push('/new-arrivals')}>New Arrivals</label>
                        <label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => router.push('/categories')}>Categories</label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-lg font-extrabold tracking-tightest text-textColor ">SHOPPING </p>
                <p className="text-secondary text-sm mt-[-5px] px-2 font-normal text-center tracking-widest">CART</p>
            </div>
            <div>
                <ul className="flex justify-evenly gap-5 text-text-color cursor-pointer max-lg:hidden">
                    <li onClick={() => router.push('/home')}>Home</li>
                    <li onClick={() => router.push('/products')}>Products</li>
                    <li onClick={() => router.push('/new-arrivals')}>New Arrivals</li>
                    <li onClick={() => router.push('/categories')}>Categories</li>
                </ul>
            </div>
            <div className="max-lg:max-w-[65%]">
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-between bg-primary px-4 py-2 rounded-md w-[100%]">
                    <div className="relative max-sm:hidden">
                        <input type="text" placeholder="Search products" className="outline-none w-[100%]" {...register("searchValue", { required: true })} />
                        {errors.searchValue && <span className="text-red-500 text-[10px] absolute left-0 top-8">This field is required</span>}
                    </div>
                    <input type="submit" id="submit" className="hidden" />
                    <label htmlFor="submit" ><CiSearch className="text-xl flex-end" /></label>
                </form>
            </div>
            <div className="flex justify-center items-center gap-3">
                <div className="tooltip tooltip-bottom text-textColor" data-tip="Add to cart">
                    <button className="btn"><MdAddShoppingCart className="text-2xl text-textColor" /></button>
                </div>
                <div className="tooltip tooltip-bottom text-textColor" data-tip="Sign In">
                    <button className="btn"><PiSignInThin className="text-2xl text-textColor" /></button>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button">
                    <div className="tooltip tooltip-bottom text-textColor" data-tip="Profile">
                        <div className="btn">
                            <CgProfile className="text-3xl text-textColor" />
                        </div>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
