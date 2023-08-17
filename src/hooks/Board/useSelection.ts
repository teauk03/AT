import { useState, ChangeEvent } from 'react';
import { SLB_FORUM_ITEMS } from "@/data/data-navbar-menu";

const useSelection = () => {
    const [manufacturer, setManufacturer] = useState('Konami');
    const [game, setGame] = useState('Games');
    const [announcement, setAnnouncement] = useState('Admin');
    const [adminMenu, setAdminMenu] = useState('Menu');

    const handleManufacturerChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setManufacturer(e.target.value);
        setGame('Games');
    };

    const handleGameChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setGame(e.target.value);
    };

    const gameOptions = SLB_FORUM_ITEMS.filter(
        item => item.manufacturer === manufacturer
    );

    return {
        manufacturer,
        setManufacturer,
        game,
        setGame,
        handleManufacturerChange,
        handleGameChange,
        gameOptions,
        announcement,
        setAnnouncement,
        adminMenu,
        setAdminMenu
    };
};

export default useSelection;