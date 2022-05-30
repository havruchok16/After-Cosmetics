import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CosmListData } from '../../data/CosmData';
import { filterArr } from '../../helpers/filterHelper';
import { sortArr } from '../../helpers/sortHelper';
import '../../styles/style.css';
import CosmList from '../Cosm/Cosms';
import './catalog.css';

export default function Catalog() {

    const [items, setItems] = useState(CosmListData);

    const changeSortValue = (v) => {
        const sortValue = v.target.value;
        setItems(sortArr(sortValue, items));
    }

    const changeFilterValue = (v) => {
        const filterValue = v.target.value;
        setItems(filterArr(filterValue, CosmListData));
    }

    return (
        <div className="catalog">
            <div className="header_img"></div>

            <div className="bread_сrumbs">
                <NavLink className="fisrt_part" to="/">
                    after
                </NavLink>
                <p className="second_part"> &#183;</p>
                <p className="third_part"> Косметика </p>
            </div>

            <div className="filter">
                <select
                    name="filterSelect"
                    className="btn_filter"
                    onChange={changeFilterValue}
                >
                    <option className="btn_filter" value="0">
                        Все средства
                    </option>
                    <option className="btn_filter" value="лицо">
                        Для лица
                    </option>
                    <option className="btn_filter" value="волосы">
                        Для волос
                    </option>
                    <option className="btn_filter" value="тело">
                        Для тела
                    </option>
                </select>

                <select
                    name="sortSelect"
                    className="btn_filter"
                     onChange={changeSortValue}
                >

                    <option className="btn_filter" value="0">
                        Популярные
                    </option>
                    <option className="btn_filter" value="1">
                        По возрастанию цены
                    </option>
                    <option className="btn_filter" value="2">
                        По убыванию цены
                    </option>
                    <option className="btn_filter" value="3">
                        По алфавиту А-Я
                    </option>
                    <option className="btn_filter" value="4">
                        По алфавиту Я-А
                    </option>
                </select>
            </div>

            <CosmList items={items} />
        </div>
    );
}
