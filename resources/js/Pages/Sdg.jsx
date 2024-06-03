import { Link, Head } from '@inertiajs/react';
import bg1 from '../Components/images/bg1.png';
import bg3 from '../Components/images/bg3.jpg';
import sdgs from '../Components/images/sdgs.png';
import icon2 from '../Components/images/icon2.png';
import logo from '../Components/images/logo.png';
import home from '../Components/images/home.png';
import artikel from '../Components/images/artikel.png';
import login from '../Components/images/login.png';
import peta from '../Components/images/peta.png';
import sdg from '../Components/images/sdg.png';
import Paginator from '@/Components/Paginator';
import titik from '../Components/images/titik.png'
import { useState } from 'react';
export default function Sdg(props) {

    return (
        <div className='w-full h-screen bg-cover flex flex-col bg-center' style={{backgroundImage: `url(${bg3})`}}>
            <div className='bg-black/50 w-full h-full'>
                <div className='w-full h-[20%] flex'>
                    <Link href='/' className='w-[25%] flex justify-center items-center'>
                    <img src={logo} className='h-full object-contain'></img>
                    </Link>
                    <div className='w-[75%] flex justify-center items-center'>
                    <label className=' text-white place-self-center text-[60px] font-bold font-plex'>Sustainable Development Goals</label>
                    </div>
                    <div className='w-[25%] justify-between'></div>
                </div>
                <div className='w-full h-[80%] flex flex-row justify-end'>
                    <div className='w-[80%] h-full flex justify-center'>
                        <div className='w-[75%] h-[30%]  flex flex-row justify-between'>
                            <img src={sdgs} className='h-full w-[30%]  object-contain'></img>
                            <p className='text-white w-[70%] font-inter text-2xl'>SDG (Sustainable Development Goals) adalah 17 tujuan global untuk mencapai masa depan yang lebih baik. Tujuan-tujuan ini dirancang untuk mencapai masa depan yang lebih baik bagi semua orang, di mana tidak ada yang tertinggal. SDG 9 fokus pada membangun infrastruktur, mendorong industri berkelanjutan, dan inovasi.</p>
                        </div>
                    </div>
                    <div className='h-full w-[12%]  flex justify-center items-center'>
                        <div className="drawer-content">
                                    <label htmlFor="my-drawer-4" className="drawer-button btn border-0 rounded-full w-[90px] h-[90px] bg-oren flex justify-center items-center">
                                    <img src={icon2} className='h-[70%] object-cover'></img>
                                    </label>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-side" >
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className="menu w-[25%] h-full bg-transparent p-0 justify-center">
                            <div className='w-full h-[70%] bg-white rounded-l-3xl flex flex-col justify-around items-center'>
                                <Link href='/' className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={home} className='h-[70%] w-[20%] ml-10 object-contain mr-5 '></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>Home</p>
                                </Link>
                                <Link href='/map' className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={peta} className='h-[70%] w-[20%] ml-10 object-contain mr-5'></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>Peta</p>
                                </Link>
                                <Link href='/artikel' className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={artikel} className='h-[70%] w-[20%] ml-10 object-contain mr-5'></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>Artikel</p>
                                </Link>
                                <Link href='/sdg' className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={sdg} className='h-[70%] w-[20%] ml-10 object-contain mr-5'></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>SDG's</p>
                                </Link>
                                <Link href={route('login')} className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={login} className='h-[70%] w-[20%] ml-10 object-contain mr-5'></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>Login</p>
                                </Link>
                                
                            </div>
                        </ul>
                    </div>
                </div>
        </div>
    );
}
