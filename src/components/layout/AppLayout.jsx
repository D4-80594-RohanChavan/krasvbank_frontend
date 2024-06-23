import React, { useLayoutEffect, useState } from 'react';
import { FiClock, FiGrid, FiList, FiLogOut, FiMenu, FiUser, FiUserMinus, FiUserPlus } from 'react-icons/fi';
import { SlArrowDown, SlArrowRight } from 'react-icons/sl';
import { Menu, MenuItem, Sidebar, menuClasses, useProSidebar } from 'react-pro-sidebar';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { RiExchangeFundsLine } from 'react-icons/ri';
import { BsCreditCard2Back, BsCreditCard2Front } from 'react-icons/bs';
import Logo from '../../assets/logo_black.png';
import Icon from '../../assets/icon.png';
import Male from '../../assets/Male.png';
import Female from '../../assets/Female.png';
import axiosV1 from '../../utils/axiosV1';
import BalanceEnquiry from '../dasboard/BalanceEnquiry';
import DebitAmount from '../dasboard/DebitAmount';
import CreditAmount from '../dasboard/CreditAmount';
import FundTransfer from '../dasboard/FundTransfer';

function AppLayout({ component }) {
    const [user] = useState(JSON.parse(localStorage.getItem('user')));
    const navigate = useNavigate();
    const { collapseSidebar, collapsed, toggleSidebar, broken } = useProSidebar();

    useLayoutEffect(() => {
        let prevScrollPos = window.pageYOffset;
        function handleScroll() {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                document.getElementById('scrollableHeader').style.top = '0';
                document.getElementById('scrollableFooter').style.bottom = '-55px';
            } else {
                document.getElementById('scrollableHeader').style.top = '-55px';
                document.getElementById('scrollableFooter').style.bottom = '0';
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggle = () => {
        if (broken) {
            toggleSidebar();
        } else {
            collapseSidebar();
        }
    };

    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const menuItemStyles = {
        root: {
            fontSize: '16px',
            fontWeight: 400,
        },
        icon: {
            color: '#203A45',
            [`&.${menuClasses.disabled}`]: {
                color: '#f2f2f2',
            },
        },
        SubMenuExpandIcon: {
            color: '#203A45',
        },
        subMenuContent: ({ level }) => ({
            backgroundColor: level === 0 ? hexToRgba('#fff', 1) : 'transparent',
        }),
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),
    };

    const signOutHandler = () => {
        axiosV1.post('/user/logout')
            .then(() => {
                delete axiosV1.defaults.headers.common.Authorization;
                localStorage.clear();
                navigate('/sign-in');
                Swal.fire({
                    icon: 'success',
                    title: 'Sign out successful.',
                    timer: 3000,
                    showConfirmButton: false,
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: error?.response?.data?.responseMessage ?? 'Failed to sign out.',
                    timer: 3000,
                    showConfirmButton: false,
                });
            });
    };

    return (
        <div>
            <Sidebar id="sidebar" breakPoint="md" backgroundColor={hexToRgba('#ffffff', 1)} rootStyles={{ color: '#203A45', zIndex: 999 }} style={{ boxShadow: '0 0 1rem 0 rgb(59 125 221)' }} className={`float-start border-none ${broken ? '' : 'position-sticky top-0'}`}>
                <div className="d-flex flex-column vh-100">
                    <div className="text-center">
                        <div className="position-sticky top-0 py-2 bg-white" style={{ zIndex: 2 }}>
                            {collapsed ? <img src={Icon} alt="KRASV" height="40px" /> : <img src={Logo} alt="KRASV" height="40px" />}
                        </div>
                        {!collapsed && (
                            <div className="my-3">
                                <img src={user?.gender === 'Male' ? Male : Female} alt="Profile" className="rounded-circle mb-2" height={90} width={90} />
                                <p className="fw-semibold mb-0">{user?.name}</p>
                            </div>
                        )}
                    </div>
                    <div className="flex-grow-1">
                        <Menu menuItemStyles={menuItemStyles} renderExpandIcon={({ open }) => <span>{open ? <SlArrowDown fontSize={10} /> : <SlArrowRight fontSize={10} />}</span>}>
                            {
                                user?.role === 'ROLE_ADMIN' && (
                                    <>
                                        <MenuItem component={<NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/admin-dashboard" />} icon={<FiGrid />}>Dashboard</MenuItem>
                                        <MenuItem component={<NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/active-users" />} icon={<FiUserPlus />}>Active Users</MenuItem>
                                        <MenuItem component={<NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/inactive-users" />} icon={<FiUserMinus />}>Inactive Users</MenuItem>
                                        <MenuItem component={<NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/transaction-history" />} icon={<FiClock />}>Transaction History</MenuItem>
                                    </>
                                )
                            }
                            {
                                user?.role === 'ROLE_USER' && (
                                    <>
                                        <MenuItem component={<NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/dashboard" />} icon={<FiGrid />}>Dashboard</MenuItem>
                                        <MenuItem component={<NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/profile" />} icon={<FiUser />}>Profile</MenuItem>
                                        <MenuItem component={<NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/bank-statement" />} icon={<FiList />}>Bank Statement</MenuItem>
                                        <MenuItem icon={<MdOutlineAccountBalanceWallet />}><BalanceEnquiry /></MenuItem>
                                        <MenuItem icon={<BsCreditCard2Back />}><DebitAmount /></MenuItem>
                                        <MenuItem icon={<BsCreditCard2Front />}><CreditAmount /></MenuItem>
                                        <MenuItem icon={<RiExchangeFundsLine />}><FundTransfer /></MenuItem>
                                    </>
                                )
                            }
                        </Menu>
                    </div>
                </div>
            </Sidebar>
            <div className="float-none overflow-hidden">
                <div className="container-fluid" id="appLayout">
                    <div className="row align-items-center scrollable-hidden border-bottom" id="scrollableHeader" style={{ height: '55px', width: broken ? '100%' : `calc(100% - ${collapsed ? '80px' : '250px'})` }}>
                        <div className="col-6">
                            <FiMenu color="#000" fontSize={20} title="Toggle Sidebar" className="pointer" onClick={() => toggle()} />
                        </div>
                        <div className="col-6 text-end">
                            <FiLogOut color="#000" fontSize={20} title="Sign Out" className="pointer" onClick={() => signOutHandler()} />
                        </div>
                    </div>
                    <div className="row my-5 px-3">
                        <div className="col-12 mt-2">
                            {component}
                        </div>
                    </div>
                    <div className="row py-2 scrollable-hidden border-top" id="scrollableFooter" style={{ width: broken ? '100%' : `calc(100% - ${collapsed ? '80px' : '250px'})` }}>
                        <div className="col-12 text-center">
                            <p className="m-0">Made with <FaHeart color="#dc3545" />. Copyright &#169; {new Date().getFullYear()} KRASV Bank</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppLayout;
