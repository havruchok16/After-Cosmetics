/* eslint-disable eqeqeq */
import "./skintest.css";
import { useState } from "react";
/* import { NavLink } from 'react-router-dom'; */

export default function SkinTest() {
    const [ageIdx, setAgeIdx] = useState(0);
    const [feelingsIdx, setFeelingsIdx] = useState(0);
    const [problemsIdx, setProblemsIdx] = useState(0);
    const [visIdx, setVislemsIdx] = useState(0);

    const [result, setResult] = useState(null);
        function onAgeIdxChanged(x) {
        setAgeIdx(x.target.value);
    }
    function onFeelingsIdxChanged(x) {
        setFeelingsIdx(x.target.value);
    }
    function onProblemsIdxChanged(x) {
        setProblemsIdx(x.target.value);
    }
    function onVisIdxChanged(x) {
        setVislemsIdx(x.target.value);
    }

    const items = [
        {
            name: "age",
            text: "Сколько вам лет?",
            options: [
                {
                    var: "до 25",
                },
                {
                    var: "25-35",
                },
                {
                    var: "35-45",
                },
                {
                    var: "больше 45",
                },
            ],
            checkedV: ageIdx,
            onChanged: onAgeIdxChanged,
        },
        {
            name: "feelings",
            text: "Какие ощущения Ваша кожа испытывает после умывания?",
            options: [
                {
                    var: "В течение дня появляется чрезмерный блеск лица",
                    res: " Жирная",
                    info: "Особенности жирной кожи: блестящая, с большими порами и мелкими морщинками. Может иметь склонность к комедонам (угрям) и прыщам. Кожа имеет более грубую структуру и жирную поверхность. Вы часто чувствуете желание умыться, особенно во второй половине дня, когда выделяется наибольшее количество жира.",
                },
                {
                    var: "Появляется чувство стянутости, сухости, дискомфорта",
                    res: " Сухая",
                    info: "Особенности сухой кожи: имеет видимую сухость и мелкие поры, склонна к образованию морщин и имеет плохую эластичность. Кожа на некоторых участках плотная и грубая. Вы чувствуете стянутость и зуд, особенно после умывания, у вас сухая кожа. Также для нее характерно шелушение поверхности и периодическое покраснение.",
                },
                {
                    var: "Дискомфорт отсутствует, кожа свежая, сияющая",
                    res: " Нормальная",
                    info: "Особенности нормальной кожи: имеет здоровый блеск и цвет, без крупных пор, морщин или тонких линий. Кожа мягкая, влажная, с гладкой и тонкой структурой.",
                },
                {
                    var: "Через 30 минут после умывания появляется незначительный жирный блеск",
                    res: " Комбинированная",
                    info: "Комбинированная кожа представляет собой сочетание нескольких типов кожи. На самом деле кожа каждого человека в большей или меньшей степени сочетается. Однако в комбинированной коже существует явная разница между кожей в Т-зоне (лоб, нос, подбородок) и щеками.",
                },
            ],
            checkedV: feelingsIdx,
            onChanged: onFeelingsIdxChanged,
        },
        {
            name: "problems",
            text: "Какие признаки свойственны Вашей коже в наибольшей степени?",
            options: [
                {
                    var: "Морщины, мелкие морщинки",
                    res: " Морщины",
                    info: "Чаще всего причиной их возникновения становится обезвоживание кожи, а также утолщение рогового слоя эпидермиса, вызванное замедлением процесса отшелушивания чешуек рогового слоя и скорости обновления его клеток.",
                },
                {
                    var: "Покраснения, раздражения",
                    res: " Гиперемия",
                    info: "Тоническая гиперемия лица и шеи наблюдается в случае повышения температуры тела во время простуды, в стрессовых ситуациях, при сильном эмоциональном возбуждении и повышенных физических нагрузках.",
                },
                {
                    var: "Расширенные поры, черные точки",
                    res: " Акне",
                    info: "Характеризуется несовершенствами, закупоренными порами, черными точками и воспалениями. Эти признаки обусловлены излишней выработкой кожного сала и недостаточным обновлением поверхности кожи. Развитию признаков проблемной кожи способствуют гормональные изменения и стресс.",
                },
                {
                    var: "Потеря упругости и эластичности",
                    res: " Потеря упругости",
                    info: " Если кожа уже значительно потеряла упругость, во время домашнего ухода следует использовать тонизирующие средства и процедуры – контрастные умывания и компрессы, лифтинг-маски и крема.",
                },
            ],
            checkedV: problemsIdx,
            onChanged: onProblemsIdxChanged,
        },
        {
            name: "visiting",
            text: "Посещаете ли вы косметолога?",
            options: [
                {
                    var: "да",
                },
                {
                    var: "нет",
                },
            ],
            checkedV: visIdx,
            onChanged: onVisIdxChanged,
        },
    ];
    const onSubmit = () => {
        setResult({
            ageRes: ageIdx,
            feelingRes: feelingsIdx,
            problemRes: problemsIdx,
            visitingRes: visIdx,
        });
    };

    return (
        <div className="section_container">
            <p className="section">
                Диагностика и онлайн-тест на определение типа кожи
            </p>

            {items.map((q, qIdx) => {
                return (
                    <div key={`q${qIdx}`}>
                        <p className="quest">{q.text}</p>

                            {q.options.map((op, idx) => {
                                return (
                                    <div key={`op${idx}`} className="answer">
                                        <input
                                            type="radio"
                                            value={idx}
                                            checked={q.checkedV == idx}
                                            onChange={(e) => q.onChanged(e)}
                                        />
                                        <p>{op.var}</p>
                                    </div>
                                );
                            })}
                    </div>
                );
            })}

            <input
                className="btn_sumbit"
                type="button"
                value="Завершить"
                onClick={onSubmit}
            />

            {result ? (
                <div className="result">
                    <p>
                        Ваш тип кожи:
                        <span>
                            {
                                items.find((v) => v.name == "feelings").options[
                                    result.feelingRes
                                ].res
                            }
                        </span>
                    </p>
                    <p>
                        {
                            items.find((v) => v.name == "feelings").options[
                                result.feelingRes
                            ].info
                        }
                    </p>
                    <p>
                        Ваше состояние кожи:
                        <span>
                            {
                                items.find((v) => v.name == "problems").options[
                                    result.problemRes
                                ].res
                            }
                        </span>
                    </p>
                    <p>
                        {
                            items.find((v) => v.name == "problems").options[
                                result.problemRes
                            ].info
                        }
                    </p>
                </div>
            ) : null}
        </div>
    );
}
