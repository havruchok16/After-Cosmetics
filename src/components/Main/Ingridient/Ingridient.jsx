import React from 'react';
import './ingrid.css';

export default function Ingridient() {
    return (
        <div className='ingridients'>

            <p className='section_name'>
                Наша косметика - это...
            </p>

            <div className='ingridients_container'>
                <div className='ingridients_container_item'>
                    <div>
                        <p className='ingr'>Эмульгаторы</p>
                        <p className='description'>для изменения поверхностного натяжения между водой и маслом</p>
                    </div>
                    <div>
                        <p className='ingr'>H2O</p>
                        <p className='description'>сверхчистым, то есть свободная от микробов, токсинов и др</p>
                    </div>
                </div>

                <div className='ingridients_container_item'>
                    <div>
                        <p className='ingr'>Натуральные <br></br> ароматные вещества</p>
                        <p className='description'>для придания привлекательного аромата</p>
                    </div>
                    <div>
                        <p className='ingr'>Природные <br></br> смягчающие средства</p>
                        <p className='description'>смягчают кожу, предотвращая потерю влаги</p>
                    </div>
                </div>
            </div>

        </div>
    );
}