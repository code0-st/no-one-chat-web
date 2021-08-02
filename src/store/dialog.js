import {makeAutoObservable} from "mobx";

class Dialog {
    dialogId = null
    messages = [
        {id: 1, date: new Date().toISOString(), isMy: false, text: "Приветик!"},
        {id: 2, date: new Date().toISOString(), isMy: false, text: "Почему ты все ещё не спишь?!"},
        {id: 3, date: new Date().toISOString(), isMy: true, text: "Добрый вечер"},
        {id: 4, date: new Date().toISOString(), isMy: true, text: "Не знаю, скучаю по ласке"},
        {id: 5, date: new Date().toISOString(), isMy: false, text: "Представь, как я нежно глажу тебя по шее..."},
        {id: 6, date: new Date().toISOString(), isMy: false, text: "Затем моя рука опускается ниже..."},
        {id: 7, date: new Date().toISOString(), isMy: false, text: "Я провожу пальцем по животу..."},
        {id: 8, date: new Date().toISOString(), isMy: true, text: "Ой, иди нахуй отсюда. Главный герой — 27-летний Илья Горюнов, семь лет отсидевший в тюрьме по ложному обвинению в распространении наркотиков. Когда Илья выходит на свободу, он понимает, что прежняя жизнь, по которой он тосковал, разрушена, и вернуться к ней он больше не сможет. Хотя он не собирался мстить человеку, котор… ЕЩЁ"},
        {id: 8, date: new Date().toISOString(), isMy: true, text: "Ой, иди нахуй отсюда. Главный герой — 27-летний Илья Горюнов, семь лет отсидевший в тюрьме по ложному обвинению в распространении наркотиков. Когда Илья выходит на свободу, он понимает, что прежняя жизнь, по которой он тосковал, разрушена, и вернуться к ней он больше не сможет. Хотя он не собирался мстить человеку, котор… ЕЩЁ"},
        {id: 8, date: new Date().toISOString(), isMy: true, text: "Ой, иди нахуй отсюда. Главный герой — 27-летний Илья Горюнов, семь лет отсидевший в тюрьме по ложному обвинению в распространении наркотиков. Когда Илья выходит на свободу, он понимает, что прежняя жизнь, по которой он тосковал, разрушена, и вернуться к ней он больше не сможет. Хотя он не собирался мстить человеку, котор… ЕЩЁ"},
    ]
    isConversationalistTyping = true

    constructor() {
        makeAutoObservable(this)
    }
}

export const dialogStore = new Dialog()
