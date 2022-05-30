import React, { useState } from "react";
import { emailRgx, phoneRgx } from "../../../helpers/validationHelper";
/* import { NavLink } from 'react-router-dom'; */
import Swal from "sweetalert2";
import "./contact.css";

export default function Contact() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(null);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);

    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState(null);

    const onFieldChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            default:
                break;
        }

        validateField(name);
    };

    const resetErrByFieldName = (name) => {
        switch (name) {
            case "name":
                setNameError(null);
                break;
            case "email":
                setEmailError(null);
                break;
            case "phone":
                setPhoneError(null);
                break;
            default:
                break;
        }
    };

    const resetFields = () => {
        setName("");
        setEmail("");
        setPhone("");
    };

    const setErrorByFieldName = (name, error) => {
        switch (name) {
            case "name":
                setNameError(error);
                break;
            case "email":
                setEmailError(error);
                break;
            case "phone":
                setPhoneError(error);
                break;
            default:
                break;
        }
    };

    const validateField = (e) => {
        if (!e.target || !e.target.name) {
            return;
        }

        const { name, value } = e.target;
        resetErrByFieldName(name);

        if (!value) {
            setErrorByFieldName(name, "Заполните поле");
            return;
        }

        let error = null;
        switch (name) {
            case "name": {
                if (value.length < 2) {
                    error = "Имя должно содержать минимум 2 символа";
                }
                break;
            }
            case "email": {
                if (!emailRgx.test(String(value).toLowerCase())) {
                    error = "Некорректный email";
                }
                break;
            }
            case "phone":
                if (!phoneRgx.test(String(value).toLowerCase())) {
                    error = "Некорректный номер телефона";
                }
                break;
            default:
                break;
        }

        if (error) {
            setErrorByFieldName(name, error);
        }

        return error == null;
    };

    const validateAllFields = () => {
        const items = [
            { name: "name", value: name },
            { name: "email", value: email },
            { name: "phone", value: phone },
        ];

        return items.every((item) => validateField({ target: item }));
    };

    const onSubmit = () => {
        const isValid = validateAllFields();

        if (isValid) {
            resetFields();
            Swal.fire({
                title: "Поздравляем",
                text: "Вы удачно записались на консультацию, ожидайте нашего звонка",
                icon: "success",
                confirmButtonText: "Хорошо",
            });
            return;
        }

        Swal.fire({
            title: "Ошибочка",
            text: "Что-то не так, проверьте введенные данные",
            icon: "warning",
            confirmButtonText: "Хорошо",
        });

    };

    return (
        <div className="section_container">
            <p className="section">Свяжись с нами</p>

            <div className="contact">
                <p className="contact_header"> Видеоконсультация </p>
                <p className="contact_info">
                    Для индивидуальной консультации мы приглашаем вас записаться
                    на видеовстречу с консультантом After.
                </p>
                <p className="contact_button">Заказать видеоконсультацию</p>
            </div>

            <div className="contact">
                <p className="contact_header"> Живая помощь </p>
                <p className="contact_info">
                    Часы работы: понедельник-воскресенье с 9:00 до 17:00 по
                    центральноевропейскому времени.
                </p>
                <p className="contact_button">Поговорите с консультантом</p>
            </div>

            <div className="contact">
                <p className="contact_header"> Телефон </p>
                <p className="contact_info">
                    Часы работы: с понедельника по пятницу с 9:00 до 17:00. 
                    Если мы не доступны, мы
                    приветствуем вас, чтобы оставить нам сообщение.
                </p>
                <p className="contact_button">375 29 765 43 21</p>
            </div>

            <div className="contact">
                <p className="contact_header"> Записаться на консультацию </p>
                {nameError && <div className="errors">{nameError}</div>}
                <input
                    onBlur={(e) => validateField(e)}
                    onChange={(e) => onFieldChange(e)}
                    value={name}
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                ></input>

                {emailError && <div className="errors">{emailError}</div>}
                <input
                    onBlur={(e) => validateField(e)}
                    onChange={(e) => onFieldChange(e)}
                    value={email}
                    type="email"
                    name="email"
                    placeholder="Электронная почта"
                ></input>

                {phoneError && <div className="errors">{phoneError}</div>}
                <input
                    onBlur={(e) => validateField(e)}
                    onChange={(e) => onFieldChange(e)}
                    value={phone}
                    type="phone"
                    name="phone"
                    placeholder="375 (ХХ) ХХХ ХХ ХХ"
                ></input>

                <input
                    className="btn_contact"
                    type="button"
                    value="Записаться"
                    onClick={onSubmit}
                />
            </div>
        </div>
    );
}
