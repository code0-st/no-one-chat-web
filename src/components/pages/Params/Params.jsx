import React, {useContext, useState} from "react";
import {ThemeContext} from "../../../store/themeContext";
import clsx from "clsx";
import {ParamItem} from "../../ParamItem/ParamItem";
import {AGE_IDS, ageEnums, GENDER_IDS, genderEnums, topicEnums, TOPICS_IDS} from "./mock";
import {SimpleParam} from "../../ParamItem/SimpleParam";
import {MultipleParam} from "../../ParamItem/MultipleParam";
import {Button} from "../../Button/Button";
import {BorderAmin} from "../../AnimatedItem/BorderAnim";

const s = require('./style.module.scss')

export const Params = ({}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const [activeMyGenderId, setActiveMyGenderId] = useState(GENDER_IDS.DEFAULT)
    const [activeConversationalistGenderId, setActiveConversationalistGenderId] = useState(GENDER_IDS.DEFAULT)

    const [activeMyAgeId, setActiveMyAgeId] = useState([AGE_IDS.TEEN])
    const [activeConversationalistAgeIds, setActiveConversationalistAgeIds] = useState([AGE_IDS.TEEN])

    const [activeTopicId, setActiveTopicId] = useState(TOPICS_IDS.TALKING)

    return (
        <div className={clsx(s.params, darkMode ? s.params__dark : s.params__light)}>
            <div className={s.params_column}>
                <ParamItem label={"Ваш пол:"} className={s.params_row}>
                    {genderEnums.map(item => <SimpleParam key={`my-gender-${item.id}`}
                                                          param={item}
                                                          activeParamId={activeMyGenderId}
                                                          onChange={setActiveMyGenderId}
                                                          darkMode={darkMode}
                    />)}
                </ParamItem>
                <ParamItem label={"Ваш возраст:"}>
                    {ageEnums.map(item => <MultipleParam key={`my-age-${item.id}`}
                                                         param={item}
                                                         activeParamIds={activeMyAgeId}
                                                         onChange={(value) => {
                                                             setActiveMyAgeId([value])
                                                         }}
                                                         darkMode={darkMode}
                                                         disabled={activeTopicId === TOPICS_IDS.FLIRTING && (item.id === AGE_IDS.CHILD || item.id === AGE_IDS.OLD)}
                    />)}
                </ParamItem>
                <ParamItem label={"Ваши темы:"} className={s.params_row}>
                    {topicEnums.map(item => <SimpleParam key={`topic-${item.id}`}
                                                         param={item}
                                                         activeParamId={activeTopicId}
                                                         onChange={setActiveTopicId}
                                                         darkMode={darkMode}
                    />)}
                </ParamItem>

                <BorderAmin>
                    <Button label={"Искать собеседника!"}
                            onClick={() => null}
                            size={'lg'}
                    />
                </BorderAmin>

            </div>
            <div className={s.params_column}>
                <ParamItem label={"Пол собеседника:"} className={s.params_row}>
                    {genderEnums.map(item => <SimpleParam key={`conversationalist-gender-${item.id}`}
                                                          param={item}
                                                          activeParamId={activeConversationalistGenderId}
                                                          onChange={setActiveConversationalistGenderId}
                                                          darkMode={darkMode}
                    />)}
                </ParamItem>
                <ParamItem label={"Возраст собеседника:"}>
                    {ageEnums.map(item => <MultipleParam key={`conversationalist-age-${item.id}`}
                                                         param={item}
                                                         activeParamIds={activeConversationalistAgeIds}
                                                         onChange={(value) => {
                                                             !!activeConversationalistAgeIds.find(item => item === value)
                                                                 ? setActiveConversationalistAgeIds(activeConversationalistAgeIds.filter(item => item !== value))
                                                                 : setActiveConversationalistAgeIds([...activeConversationalistAgeIds, value])
                                                         }}
                                                         darkMode={darkMode}
                                                         disabled={activeTopicId === TOPICS_IDS.FLIRTING && (item.id === AGE_IDS.CHILD || item.id === AGE_IDS.OLD)}
                    />)}
                </ParamItem>
            </div>
        </div>
    )
}
