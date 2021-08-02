import React, {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {ThemeContext} from "../../../store/themeContext";
import clsx from "clsx";
import {dialogStore} from "../../../store/dialog";
import {Message} from "../../Message/Message";
import {EmojiIcon, SendIcon} from "../../../static/icons/icons";

const s = require('./style.module.scss')

export const Dialog = observer(({}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const {messages, isConversationalistTyping} = dialogStore

    const [message, setMessage] = useState("")

    return (
        <div className={clsx(s.dialog, darkMode ? s.dialog__dark : s.dialog__light)}>
            <div className={clsx(s.message_box, darkMode ? s.message_box__dark : s.message_box__light)}>

                <div className={clsx(s.text, darkMode ? s.text__dark : s.text__light)}>Собеседник найден. Общайтесь!</div>


                {messages.map(item => <Message key={`message-${item.id}`}
                                               message={item}
                />)}

                {isConversationalistTyping && <div className={clsx(darkMode ? s.text__dark : s.text__light, s.text__typing)}>
                    Собеседник печатает сообщение...
                </div>}

            </div>

            <div className={s.message_field}>

                <div className={s.input_area}>
                    <textarea className={s.input}/>
                    <div className={s.input_area_emoji}><EmojiIcon /></div>
                </div>

                <div className={s.send}>
                    <SendIcon />
                </div>

            </div>
        </div>
    )
})
