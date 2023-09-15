'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

export default function Sidenav() {
    return (
        <Sidebar className={'h-full w-full'}
                 aria-label="Sidebar with logo branding example">
                <Sidebar.Logo
                    href="#"
                    img="/favicon.ico"
                    imgAlt="Flowbite logo">
                    <p className="font-normal text-lg">
                        Job Match
                    </p>
                </Sidebar.Logo>

                <Sidebar.ItemGroup>
                    <Sidebar.Logo href="#"
                                  img="/millicent-profile-pic.png"
                                  imgAlt="Flowbite logo"
                    >
                        <p className="text-sm font-light">
                            Welcome, Tarnished!
                        </p>
                    </Sidebar.Logo>
                </Sidebar.ItemGroup>

                <Sidebar.ItemGroup>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="#"
                                icon={HiChartPie}
                            >
                                <p>
                                    Dashboard
                                </p>
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiViewBoards}
                            >
                                <p>
                                    Kanban
                                </p>
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiInbox}
                            >
                                <p>
                                    Inbox
                                </p>
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiUser}
                            >
                                <p>
                                    Users
                                </p>
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiShoppingBag}
                            >
                                <p>
                                    Products
                                </p>
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiArrowSmRight}
                            >
                                <p>
                                    Sign In
                                </p>
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiTable}
                            >
                                <p>
                                    Sign Up
                                </p>
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar.ItemGroup>
            </Sidebar>
    )
}